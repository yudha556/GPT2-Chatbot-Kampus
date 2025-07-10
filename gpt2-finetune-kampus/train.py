from transformers import GPT2Tokenizer, GPT2LMHeadModel, Trainer, TrainingArguments, DataCollatorForLanguageModeling
from datasets import load_dataset
import torch

# Load dataset
dataset = load_dataset("json", data_files={"train": "data/datasets.jsonl"})
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer.pad_token = tokenizer.eos_token  # biar nggak error saat padding

# Tokenisasi
def tokenize(batch):
    texts = [text + tokenizer.eos_token for text in batch["text"]]
    return tokenizer(
        texts,
        truncation=True,
        padding="max_length",
        max_length=128
    )


tokenized_dataset = dataset.map(tokenize, batched=True, remove_columns=["text"])

# Load model
model = GPT2LMHeadModel.from_pretrained("gpt2")
model.resize_token_embeddings(len(tokenizer))

# Setup training args
training_args = TrainingArguments(
    output_dir="./gpt2-kampus",
    overwrite_output_dir=True,
    per_device_train_batch_size=2,
    num_train_epochs=5,
    save_steps=500,
    save_total_limit=2,
    logging_dir="./logs",
    logging_steps=100,
    fp16=torch.cuda.is_available(),
    warmup_steps=100,
    weight_decay=0.01,
)

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm=False)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset["train"],
    data_collator=data_collator,
)

trainer.train()

trainer.save_model("./gpt2-kampus")
tokenizer.save_pretrained("./gpt2-kampus")

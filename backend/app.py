from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

# Load model Bahasa Indonesia
model = GPT2LMHeadModel.from_pretrained("Yudha556/kampus-gpt2-models", subfolder="gpt2-kampus")
tokenizer = GPT2Tokenizer.from_pretrained("Yudha556/kampus-gpt2-models", subfolder="gpt2-kampus")
tokenizer.pad_token = tokenizer.eos_token
model.eval()

prompt = (
    "Berikut ini adalah pertanyaan dan jawabannya seputar kampus:\n\n"
    "Pertanyaan: Apa itu UKM?\n"
    "Jawaban:"
)

inputs = tokenizer(prompt, return_tensors="pt")

with torch.no_grad():
    outputs = model.generate(
        **inputs,
        max_new_tokens=256,
        no_repeat_ngram_size=3,
        do_sample=True,
        temperature=0.9,
        top_k=40,
        top_p=0.95,
        pad_token_id=tokenizer.pad_token_id,
        eos_token_id=tokenizer.eos_token_id,
    )

result = tokenizer.decode(outputs[0], skip_special_tokens=True)
response = result.split("Jawaban:")[-1].split("###")[0].strip()
print("Jawaban:", response)

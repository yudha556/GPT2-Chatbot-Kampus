# Intinya disini hasil training dari dataset yang udah saya lakukan

hasil trainig dan dataset training ada di repo hugging face, tidak saya upload di github btw

### intinya hasil training_lossnya itu kalo bisa sampe <2
|Nomor|Training Loss | Hasil |
|-----|--------------|--------|
|1. |5.198906898498535| >5 |
|2. |5.198906898498535| >5 |
|3. |2.339508056640625| dah mayan <4 yakan|
|4. |4.232559936523438| masih kurang >4 |
|5. |4.162331787109375| >4 |
|6. |3.317725714321794| >3 mayan laah|


1. TrainOutput(global_step=3, training_loss=5.198906898498535, metrics={'train_runtime': 499.2033, 'train_samples_per_second': 0.006, 'train_steps_per_second': 0.006, 'total_flos': 195969024000.0, 'train_loss': 5.198906898498535, 'epoch': 3.0})

2. /tmp/ipython-input-45-322514461.py:16: FutureWarning: tokenizer is deprecated and will be removed in version 5.0.0 for Trainer.__init__. Use processing_class instead.
  trainer = Trainer
 [3/3 04:45, Epoch 3/3]
Step	Training Loss
TrainOutput(global_step=3, training_loss=5.198906898498535, metrics={'train_runtime': 438.7979, 'train_samples_per_second': 0.007, 'train_steps_per_second': 0.007, 'total_flos': 195969024000.0, 'train_loss': 5.198906898498535, 'epoch': 3.0})

3. TrainOutput(global_step=10, training_loss=2.339508056640625, metrics={'train_runtime': 1450.0859, 'train_samples_per_second': 0.007, 'train_steps_per_second': 0.007, 'total_flos': 653230080000.0, 'train_loss': 2.339508056640625, 'epoch': 10.0})

4. loss_type=None` was set in the config but it is unrecognised.Using the default loss: `ForCausalLMLoss`.
{'loss': 4.7046, 'grad_norm': 28.83542823791504, 'learning_rate': 4.9500000000000004e-05, 'epoch': 4.0}
{'train_runtime': 279.1384, 'train_samples_per_second': 0.896, 'train_steps_per_second': 0.448, 'train_loss': 4.232559936523438, 'epoch': 5.0}   

5. Map: 100%|███████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 50/50 [00:00<00:00, 930.51 examples/s]
  0%|                                                                                                                                                                                    | 0/125 [00:00<?, ?it/s]`loss_type=None` was set in the config but it is unrecognised.Using the default loss: `ForCausalLMLoss`.
{'loss': 4.6573, 'grad_norm': 27.76406478881836, 'learning_rate': 4.9500000000000004e-05, 'epoch': 4.0}
{'train_runtime': 276.374, 'train_samples_per_second': 0.905, 'train_steps_per_second': 0.452, 'train_loss': 4.162331787109375, 'epoch': 5.0}  

6. loss_type=None` was set in the config but it is unrecognised.Using the default loss: `ForCausalLMLoss`.
{'loss': 4.8607, 'grad_norm': 28.376537322998047, 'learning_rate': 4.9500000000000004e-05, 'epoch': 1.72}
{'loss': 2.7325, 'grad_norm': 27.859821319580078, 'learning_rate': 2.394736842105263e-05, 'epoch': 3.45}                                                                                                          
{'train_runtime': 725.1488, 'train_samples_per_second': 0.8, 'train_steps_per_second': 0.4, 'train_loss': 3.317725714321794, 'epoch': 5.0}  
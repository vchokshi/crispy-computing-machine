#!/usr/bin/env python

import pycaret
import pprint

from pycaret.datasets import get_data
data = get_data('insurance')
pprint.pprint(data)

# init setup
from pycaret.regression import *
s = setup(data, target = 'charges')

# model training and selection
#best = compare_models()

# evaluate trained model
#evaluate_model(best)

# predict on hold-out/test set
#pred_holdout = predict_model(best)

# predict on new data
#new_data = data.copy().drop('Purchase', axis = 1)
#predictions = predict_model(best, data = new_data)

# save model
#save_model(best, 'best_pipeline')

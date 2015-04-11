#!/bin/bash

#usage : scripts/deps.sh

third_party/goog/closure/bin/build/depswriter.py --root_with_prefix='tart/ ../../../../tart/' --output_file='tart/deps.js'

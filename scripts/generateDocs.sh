#!/bin/bash

#usage : scripts/generateDocs.sh

rm -rf ./docs
jsdoc -c ./scripts/jsdoc-conf.json

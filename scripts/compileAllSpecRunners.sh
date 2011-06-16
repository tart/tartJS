#!/bin/bash

for i in `find * -type f | grep -i spec | grep -i compiled.js`; 
do
    echo -e "========= COMPILING $i =========" ; 
    scripts/compileForSpecRunner.sh $i 2> /dev/null; 
    echo -e "========= FINISHED $? =========\n"; 
done

#!/bin/bash

for i in `find * -type f | grep -i spec | grep -i "SpecRunner.html$" | grep -v "third_party"`; 
do
    compiledJs=`echo $i | sed -e 's/SpecRunner.html/compiled.js/'`
    echo -e "========= COMPILING $compiledJs =========" ; 
    scripts/compileForSpecRunner.sh $compiledJs 2> /dev/null; 
    echo -e "========= FINISHED $? =========\n"; 
done

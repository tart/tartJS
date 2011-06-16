#!/bin/bash

#run all SpecRunner*html files using qasmine

for i in `find * -type f | grep -v third_party | grep -i SpecRunner | grep -i "\.html"`; 
do
    echo -e "========= RUNNUNG $i =========" ; 
    qasmine $i 2> /dev/null; 
    echo -e "========= FINISHED $? =========\n"; 
done

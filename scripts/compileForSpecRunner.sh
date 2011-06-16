#!/bin/bash

#usage : scripts/compileForSpecRunner.sh ply/components/AnimatedCarouselExample/spec/compiled.js

outputFile=$1

if [[ $outputFile == *spec/compiled.js* ]]
then
    namespace=`echo $outputFile | sed -e 's/\/spec\/compiled.js//g' | sed -e 's/\//\./g'` 
    namespace=${namespace}.SpecRunner
else 
    echo "ERROR : Path should containt spec/compiled.js";
    exit 1;
fi

tools/goog/build/closurebuilder.py --root="third_party/goog/"  --root="tart/"  --root="ply/"   --namespace="${namespace}"  --compiler_flags="--externs=tart/externs/tart.externs.js" --compiler_flags="--externs=tart/externs/jasmine.externs.js" \
--compiler_flags="--externs=tart/externs/jquery-1.4.4.externs.js"  \
--output_mode="compiled"  --compiler_jar=tools/goog/compiler/compiler.jar  \
--output_file=${outputFile}  \
--compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
--compiler_flags="--output_wrapper='(function(){%output%})()'" \
--compiler_flags="--create_source_map='compiled/source_map.js'" \
--compiler_flags="--property_map_output_file='compiled/properties.out'" \
--compiler_flags="--variable_map_output_file='compiled/variables.out'" \
--compiler_flags="--warning_level=VERBOSE" \
--compiler_flags="--formatting=PRETTY_PRINT" \
--compiler_flags="--formatting=PRINT_INPUT_DELIMITER" \
--compiler_flags="--jscomp_warning=accessControls" \
--compiler_flags="--jscomp_error=checkRegExp" \
--compiler_flags="--jscomp_error=checkTypes" \
--compiler_flags="--jscomp_error=nonStandardJsDocs" \
--compiler_flags="--jscomp_error=strictModuleDepCheck"

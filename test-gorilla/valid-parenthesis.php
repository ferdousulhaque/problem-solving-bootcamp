<?php

function validation(string $input): bool {
    $map = [
        ')' => '(',
        ']' => '[',
        '}' => '{'
    ];
    $stack = [];
    $input_split = str_split($input);

    foreach($input_split as $one){
        if(in_array($one, array_values($map))){
            array_push($stack, $one);
        }
        if(in_array($one, array_keys($map))){
            if(empty($stack) || (array_pop($stack) != $map[$one])){
                return false;
            }
        }
    }
    return true;
}

var_dump(validation("()"));
var_dump(validation("({[]})"));
var_dump(validation("({[])"));
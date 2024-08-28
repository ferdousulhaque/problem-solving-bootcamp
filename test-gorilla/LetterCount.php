<?php

class LetterCount {
    public static function count($str){
        if(empty($str)){
            throw new Exception("No values given");
        }
        // Remove blanks and lowercase
        $str = str_replace(' ', '', strtolower($str));
        // Split the string to array
        $a_str = str_split($str);
        // Frequency of characters in array
        $frequency_map = array_count_values($a_str);
        // Print with *
        $print = array_map(fn($count, $alphabet) => $alphabet . ':' . str_repeat('*', $count)
        ,$frequency_map, array_keys($frequency_map));
        return implode('',$print)."\r\n";
    }
}

try{
    // Regular Case
    print(LetterCount::count("The quick brown fox jumps over the lazy dog"));
    // Exception Case
    print(LetterCount::count(""));
}catch(Exception $ex){
    var_dump($ex->getMessage());
}

<?php

function input(int $n){
    $tower = new Tower($n);
    return $tower->build();
}


class Tower{

    private int $height;

    function __construct($height) {
        $this->height = $height;
    }

    public function build(): array{
        for($i=0; $i < $this->height; $i++){
            $result[] = $this->floor($i+1);
        }
        return $result;
    }

    function floor(int $floor){
        $result = '';
        $result .= $this->addMargin($floor);
        $result .= $this->addBricks($floor);
        $result .= $this->addMargin($floor);
        return trim($result);
    }

    function addMargin(int $floor){
        $margin = intval(($this->height-$floor)/2);
        return str_repeat(' ', $margin);
    }

    function addBricks(int $floor){
        $brick = $floor + ($floor-1);
        return str_repeat('*', $brick);
    }
}

function custom_assert(array $output, array $expected): bool{
    $state = true;
    for($i=0; $i<count($expected); $i++){
        if($output[$i] != $expected[$i]){
            $state = false;
            break;
        }
    }
    return $state;
}

// Test Inputs
// [$input, $expected]
$cases = [
    [1, ['*']],
    [2, ["*","***"]],
    [3, ["*","***","*****"]],
    [6, ["*","***","*****","*******","*********","***********"]]
];

echo "\r\n";
for($i=0; $i<count($cases); $i++){
    $result = custom_assert(
        input($cases[$i][0]), $cases[$i][1]
    ) ? "\e[1;37;42mPASS\e[0m\n" : "\e[1;37;31mFAIL\e[0m\n";
    $no = $i+1;
    echo "Case {$no}: " . $result;
    echo "\r\n";
}

<?php

namespace App\Model;

class StringEvaluator
{

    public function evaluateString(string $expression) : string
    {
        $result = null;
        $operators = [];

        $tmp_op = preg_replace('([^\\+\\-*\\/%\\^])', ' ', trim($expression));
        $tmp_op = explode(' ', trim($tmp_op));
        
        foreach ($tmp_op as $key => $val) {
            if ($val)
                $operators[] = $val;
        }
        
        $numbers = preg_replace('([^0-9,.])', ' ', trim($expression));
        $numbers = explode(' ', $numbers);
        
        $i = 0;
        
        foreach ($numbers AS $key => $val) {
            if ($key == 0) {
                $result = $val;
                continue;
            }
        
            if ($val) {
                switch ($operators[$i]) {
                    case '*':
                        $result *= $val;
                        break;

                    case '+':
                        $result += $val;
                        break;
                    
                    case '/':
                        $result /= $val;
                        break;
                        
                    case '-':
                        $result -= $val;
                        break;
                }
                
                $i++;
            }
        }

        return $result;
    }
}
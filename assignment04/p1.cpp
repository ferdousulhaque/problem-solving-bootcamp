// https://www.hackerrank.com/challenges/staircase/problem

#include<bits/stdc++.h>

void staircase(int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = i; j < n-1; j++)
            printf(" ");
        for (int k = 0; k < i + 1; k++)
            printf("#");
        printf("\n");
    }
}

int main(){
    staircase(6);
    
    return 0;
}
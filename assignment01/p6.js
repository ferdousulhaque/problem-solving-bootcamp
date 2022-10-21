// https://www.hackerrank.com/challenges/handshake/problem?isFullScreen=true

/*
 * Complete the 'handshake' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function handshake(n) {
    if(n == 1)
        return 0;
    else
        return ((n)*(n-1))/2;
}
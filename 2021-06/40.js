/*
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

function solution(n, m) {
    /* 최대공약수는 두 수를 나눈 나머지 값이 0이 될때까지 이 행위를 반복하는 유킬리드 호제법으로 풀면 된다.

       예를 들어 684 % 232 = 184 이다. 작은 값은 232, 나머지는 184 이므로 이를 다시 나눠준다. 232 % 184 = 48, 184 % 48 = 40, 48 % 40 = 8, 40 % 8 = 0 이 때 최대 공약수는 8이 되는 것이다.
    */
    const greatest = (a, b) => {
        if (b === 0) return a; // 최종적으로 (8, 0) 을 입력받게 되므로 a 가 최대 공약수가 된다.
        return greatest(b, a % b)
    }
    
    const least = (a, b) => (a * b) / greatest(a, b)  // 최소 공배수는 두 정수의 곱 / 최대공약수
    
    return [greatest(n,m), least(n,m)];
}
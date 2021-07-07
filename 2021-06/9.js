/*
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    let reversed_N = n.toString(3).split('').reverse().join('') // toString(3) 은 삼진법으로 변환하는 메소드이다. 뒤집어야 하므로 reverse 메소드를 사용하는데 배열이어야 사용 가능하므로 split 을 통해 각 숫자를 쪼갠 배열을 뒤집고 join 을 통해 
    // 다시 붙혀준다. 
    return parseInt(reversed_N, 3) // 마지막으로 삼진법으로 표현된 숫자를 parseInt 함수를 통해 다시 십진법으로 바꾼다.
}
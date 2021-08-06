/*
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(answers) {
    let answer = [];
    const a1 = [1,2,3,4,5]; // 1번의 패턴
    const a2 = [2,1,2,3,2,4,2,5]; // 2번의 패턴
    const a3 = [3,3,1,1,2,2,4,4,5,5]; // 3번의 패턴
    
    let a1c = answers.filter((a, i) => a === a1[i%a1.length]).length;
    // answer 가 9개면 a1 은 5개 이므로 0%5 = 0, 1%5 = 0 ... 5%5 = 0, 6%5 = 1... 순으로 해당 인덱스만큼 계속 순회하게끔 설정한다.
    let a2c = answers.filter((a, i) => a === a2[i%a2.length]).length;
    let a3c = answers.filter((a, i) => a === a3[i%a3.length]).length;
    
    let max = Math.max(a1c, a2c, a3c); // 수포자 중 가장 많이 맞춘 사람을 고른다.
    
    if (a1c === max) {answer.push(1)}; // a1c 가 가장 많이 맞춘 경우
    if (a2c === max) {answer.push(2)}; // ...
    if (a3c === max) {answer.push(3)}; // ...
    
    return answer;
}
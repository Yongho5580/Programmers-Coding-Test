/*
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
*/

function solution(N, stages) {
    let arr = []; 
    let arr2 = [];
    for (let i = 1; i <= N ; i++) {
        let filtered = stages.filter(stage => stage > i) // 1번부터 N 번 스테이지까지 통과한 사람의 수를 구하는 필터 함수
        let division = (stages.length - asdf.length) / stages.length; // 실패율을 구하는 코드
        arr.push({stageIndex : i, value: division}); // arr 배열에 스테이지의 번호와 실패율을 담은 객체를 push 한다.
        stages = filtered; // stages 를 필터링한 값으로 업데이트 하면서 반복.
    }
     arr.sort((a,b) => b.value - a.value).map(el => arr2.push(el.stageIndex)) // arr 에 담아졌다면 value 값에 따른 내림차순으로 정렬하고 map 을 통해 해당 값들의 인덱스를 arr2 배열에 푸쉬한다.
    return arr2; // 담은 배열을 리턴한다.
}
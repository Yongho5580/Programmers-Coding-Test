/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
    const l = s.length;
    
    if (l === 4 || l === 6) {
        return s.split("").every(el => !isNaN(el));
        // isNaN 이 true 인 경우는 문자열이 존재할 경우, 따라서 문자열이 모두 숫자인 경우는 isNaN 이 false 인 경우이지만 이 경우 true 를 리턴해야하므로 ! 메소드를 사용한다.
    }
    return false;
}


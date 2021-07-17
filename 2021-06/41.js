/*
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    const arr = numbers.split("");
    const answer = new Set();
  
    // 처음엔 배열과 빈 문자열을 파라미터로 넣는다.
    getNumber(arr, '');
  
    function getNumber(numbersArr, currentNumber) {
      if (numbersArr.length) {
        // arr 수만큼 돈다.
        for (let i = 0; i < numbersArr.length; i++) {
          // temp array 변수를 지정한다.
          const temp = [...numbersArr];
  
          // temp에서 i번째 값을 하나 떼온다.
          temp.splice(i, 1);
  
          // 소수 체크
          if (isPrime(parseInt(currentNumber + numbersArr[i]))) {
            answer.add(parseInt(currentNumber + numbersArr[i]))
          }
  
          // 재귀로 순서가 바뀐 temp, 현재 수 + 이번에 바뀐 수를 호출한다.
          getNumber(temp, currentNumber + numbersArr[i])
        }
      }
    }
  
    function isPrime(num) {
      if (num < 2) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    return answer.size;
  }
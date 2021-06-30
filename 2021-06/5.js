/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
1. nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
2. nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

/*
나의 풀이
 nums에 들어있는 숫자의 개수는 3개 이상 50개 이하이므로 nums[0]+ nums[1] + nums[2] 부터 시작해서 nums[0] + nums[1] + nums[3] ... 이런순으로 가야함
 그에 맞는 삼중 포문을 작성하고 3개의 값을 더한 값을 sum 배열에 저장함.
 소수 구하는 함수를 따로 만들고 sum 배열의 값들이 소수가 맞는지 판별한 후, 소수가 맞으면 ++ 해줌.
*/

function solution(nums) {
    let result = 0;
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                let temp = nums[i] + nums[j] + nums[k];
                sum.push(temp);
            }
        }
    }
    
    for (let l = 0; l < sum.length; l++) {
        if (isPrime(sum[l])) {
            result++;
        }
    }
    return result;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return true;
}
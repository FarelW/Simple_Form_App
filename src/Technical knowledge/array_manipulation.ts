export default function arrayManipulation(arr:number[],target:number):number[][] {
    let ans:number[][]=[]
    for (let i = 0; i < arr.length; i++) {
        let temp=arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (temp+arr[j]==target) {
                let found=false
                for (let k = 0; k < ans.length; k++) {
                    if ((ans[k][0]==arr[i]&&ans[k][1]==arr[j])||(ans[k][0]==arr[j]&&ans[k][1]==arr[i])) {
                        found=true
                        break
                    }
                }
                if (!found) {
                    ans.push([arr[i], arr[j]])
                }
            }
        }
    }
    console.log(ans)
    return ans
}
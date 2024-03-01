export default function stringAnagram(word:string, target:string):boolean{
    if (word.length!=target.length) {
        return false
    }
    else{
        for (let i = 0; i < word.length; i++) {
            let count=0
            for (let j = 0; j < word.length; j++) {
                if (word[i]==word[j]) {
                    count++
                }
            }

            for (let k = 0; k < target.length; k++) {
                if (word[i]==target[k]) {
                    count--
                }
            }

            if (count!=0) {
                return false
            }
        }
        return true
    }
}
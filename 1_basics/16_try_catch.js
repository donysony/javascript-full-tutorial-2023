/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
    try {
        console.log('Hello');
            
        // throw new Error('큰 문제가 생겼습니다!'); //새로운 에러객체 생성

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        //try에서 에러가 났든 안났는 실행됨, optional
        console.log('---finally---');
    }
}
runner();
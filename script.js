console.log('hello world')

let elInputUsername = document.querySelector('#username')
let elSuccessMessage = document.querySelector('.success-message')

console.log(elInputUsername)
console.log(elSuccessMessage)

elInputUsername.onkeyup = function() {
   // console.log ('뭔가 입력하고 있군요!?') -> 페이지 상 아이디에 뭔가 입력하고 있으면 콘솔로그에 '뭔가 입력하고 있군요!?'가 나오는 걸 볼 수 있다. 
    console.log(elInputUsername.value) //아이디에 치고있는 문자를 콘솔 로그에 나오게 한다

    if(isMorethan4Length(elInputUsername.value)){
        elSuccessMessage.classList.remove('hide') //success-message(사용할 수 있는 아이디입니다)가 나오게 한다
    }
    else{
        elSuccessMessage.classList.add('hide') //4글자 이상이 아니라면 띄웠던 걸 가린다
    }
}

//글자수 4개 이상일 때 라는 조건을 만들어보자

function isMorethan4Length(value) {
  return value.length >= 4
}
//콘솔 로그에 isMorethan4Length('hello')를 쳤을 땐 true
//isMorethan4Length('he')를 쳤을 땐 false 가 나온다.
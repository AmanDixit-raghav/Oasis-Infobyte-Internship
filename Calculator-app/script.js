let ans="";
let buttons=document.querySelectorAll('.button')


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            ans=eval(ans)
            ans=ans.toString();
            ans=Number(ans.slice(0,11))
            
            document.querySelector('input').value=ans
          
        }
        else if(e.target.innerHTML=='AC'){
            ans="";
            document.querySelector('input').value=ans;
        }
        else if(e.target.innerHTML=='DEL'){
             let arr=ans.split('');
             arr.pop();
             ans=arr.join('')
            document.querySelector('input').value=ans;
        }
        else if((e.target.innerHTML=='+'||e.target.innerHTML=='*'||e.target.innerHTML=='/'||e.target.innerHTML=='%')&&ans==''){
            ans='';
            document.querySelector('input').value=ans; 
        }
        else if(((e.target.innerHTML=='-')&&(ans[ans.length-1]=='-'||ans[ans.length-1]=='+'||ans[ans.length-1]=='*'||ans[ans.length-1]=='/'||ans[ans.length-1]=='%')||(e.target.innerHTML=='+')&&(ans[ans.length-1]=='-'||ans[ans.length-1]=='+'||ans[ans.length-1]=='*'||ans[ans.length-1]=='/'||ans[ans.length-1]=='%')||(e.target.innerHTML=='/')&&(ans[ans.length-1]=='-'||ans[ans.length-1]=='+'||ans[ans.length-1]=='*'||ans[ans.length-1]=='/'||ans[ans.length-1]=='%')||(e.target.innerHTML=='%')&&(ans[ans.length-1]=='-'||ans[ans.length-1]=='+'||ans[ans.length-1]=='*'||ans[ans.length-1]=='/'||ans[ans.length-1]=='%')||(e.target.innerHTML=='*')&&(ans[ans.length-1]=='-'||ans[ans.length-1]=='+'||ans[ans.length-1]=='*'||ans[ans.length-1]=='/'||ans[ans.length-1]=='%'))){

            document.querySelector('input').value=ans; 
        }
        else{
            ans+=e.target.innerHTML;
            document.querySelector('input').value=ans
    }})
    }

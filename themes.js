const link = document.getElementById("file1");
function changingTheme (props){
    let newTheme=0;
    let msg=document.getElementById('disMsg');
    if (props==1)
    {
        newTheme='theme1';
       
        msg.style.color="red";
    }
    if (props==2)
    {
        newTheme='theme2';
         msg.style.color="blue";
    }
    if (props==3)
    {
        newTheme='theme3';
        msg.style.color="yellow";
    }
    link.href=newTheme+'.css';
}

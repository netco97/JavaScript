const title = document.querySelector(".hello h1");
console.dir(title);

function HandleClickListenr()
{
    console.log("title was clikced!");
}
function HandleMouseenter()
{
    title.innerText="Changed text in mouseenter";
}

function HandleMouseleave()
{
    title.innerText="Returned text in mouseleave";
}
title.onclick= HandleClickListenr;
title.addEventListener("mouseenter",HandleMouseenter); //== title.onmouseenter = HandleMouseenter;
title.addEventListener("mouseleave",HandleMouseleave); //== title.onmouseleave = HandleMouseleave;
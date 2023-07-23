<script>
  
    export default {
       
    }

</script>
 
<template>
    <header id="open" class="header">
        <div class="black border-b border-gray-600 divide-solid">
            <div id="close" class="header__container md:container md:mx-auto px-5"> 
                    <div class="flex justify-between backgr" > 
                        <div class="right__side flex items-center">
                            <img class="world" src="/images/Header/WorldIcon.png" alt="">
                            <select class="text-gray-500 ml-2" name="" id="">
                                <option class="ml-2"  value="EN/CAD">EN/CAD</option>
                            </select>
        
                            <img class="ml-3" src="/images/Header/QuestionIcon.png" alt="">
                            <a class="ml-3 text-white border-blue-300 border rounded sm:text-xs font-normal p-0.5 feature" href="#">Latest Feature Release, click here.</a>
                        </div>
                        <div class="left__side flex header__menu menu">
                            <nav class="navbar menu__body">
                                <ul class="nav-list flex menu__list items-center">
                                    <li class="nav-item menu__item mr-3 "><a class="text-white menu__link-buy px-3.5 py-2 leading-none rounded-full text-xs" href="#">Buy</a></li>
                                    <li class="nav-item menu__item mr-3 "><a class="text-gray-500  p-2.5 menu__link text-xs" href="#">Plan</a></li>
                                    <li class="nav-item menu__item mr-3 "><a class="text-gray-500 p-2.5 menu__link text-xs" href="#">Promo</a></li>
                                    <li class="nav-item menu__item mr-3"><a class="menu__link" href="#"><img src="/images/Header/BellIcon.png" alt=""></a></li>
                                    <li class="nav-item menu__item mr-3"><a class="menu__link" href="#"><img src="/images/Header/TimeIcon.png" alt=""></a></li>
                                    <li class="nav-item menu__item"><a class="menu__link" href="#"><img src="/images/Header/ProfileIcon.png" alt=""></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header__button">          
                            <a href="#open" class="icon-menu"><span></span></a>
                            <a href="#close" class="close-icon-menu"></a>
                        </div>
                    </div>

                </div>
           
        </div>
       

            
           
                <div class="about-us__side border-b border-gray-600 divide-solid">
                    <div class="md:container md:mx-auto px-5 flex py-2 justify-between">
                        <div class="right flex">
                            <div class="logo-block">
                                <img src="/images/Header/Logo.png" alt="">
                            </div>
                            <div class="about__title ml-4">
                                <h2 class="text-lg us-title">About us</h2>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <button class="hidden sm:text-sm sm:font-semibold sm:text-white sm:p-3 sm:rounded-full sm:leading-none sm:flex">
                                <img class="mr-3" src="/images/Header/ButtonIcon.png" alt=""> Event & Brand Search
                               
                            </button>
                        </div>
                    </div>
                </div>
                
           
            
        
       
    </header>




  



</template>

<style scoped>
.us-title {
    color:#29ABE2;
}
button {
    background-color:#29ABE2;
}
.menu__link-buy {
    background-color:#29ABE2;
}
.left__side-mob {
    display: none;
}

.left {
    color:#29ABE2;
    display: grid;
    place-items: center;
}
.black {
    background: #191A1E;
}
select {
    background-color:#1D1F24;
}

.title {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}
.about__title {
    display: grid;
    place-items: center;
}
.about-us__side {
    background-color: #1D1F24;
}
.line-block {
    display: grid;
    place-items: center;
}
.line {
    position: relative;
    display: block;
    height: 0px;
    width: 30px;
    transform: rotate(90deg);
    background-color: #444951;
}
.header__container {
    align-items: center;
  }
    
.header__logo {
    position: relative;
    z-index: 5;
}
.header__menu {
    flex: 1 1 auto;
}
.header__button {
    position: relative;
}

.menu {
    display: flex;
    justify-content: flex-end;
}

.menu__item:last-child {
    margin: 0px 0px 0px 0px;
}


@media (max-width:767.98px) { 
    .feature {
        display: none;
    }
    .left__side-mob {
        display: block;
    }
    
    
    .left {
        display: none;
    }
    .backgr {
       margin: 0;
       
    }
   
    
    /* 767 */
    .menu__body {
        /* display: none; */
        position: fixed;
        overflow:auto;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color:#fff;
        padding: 90px 15px 30px 15px;
        transition: left 0.3s ease 0s;
    }
    .header:target .menu__body {
        left: 0;
    } 
    /* .header:target video {
        display: none;
    }  */
   
   
   
   
    .header:target .menu__body:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        height: 80px;
        width: 100%;
        background-color: #fff;

    }
    .menu__list {
        margin-top: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .menu__link {
        /* color: #000; */
        font-size: 20px;
    }
    .menu__item {
        margin: 0px 0px 25px 0px;
    }
    .menu__item:last-child {
        margin-bottom: 0;
    }
    .header__button .button {
        padding: 14px 20px;
    }
}


/* burger-menu */
.close-icon-menu {
    display: none;
}
.icon-menu {
    display: none;
}
@media (max-width:767.98px) {
/* 767 */
    /* .close-icon-menu, */
    .icon-menu {
        display: flex;
        flex: 0 0 30px;

        width: 28px;

        height: 18px;
        position: relative;
        flex-direction: column;
        justify-content:space-between;
        margin: 10px 0px 0px 20px;
    }
    .icon-menu::before,
    .icon-menu::after{
        content: "";
        background-color: #fff;
        height: 2.5px;
    }
    .icon-menu span {
        height: 2.5px;
        background-color: #fff;
    }
    .close-icon-menu{
        position: relative;
        flex: 0 0 30px;

        width: 28px;

        height: 30px;
        margin: 5px 0px 0px 20px;
    } 
    .close-icon-menu::before,
    .close-icon-menu::after
     {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        background-color: #1D1F24;
        height: 2.5px;
    }
    .close-icon-menu::before {
       transform: rotate(45deg); 
    }
    .close-icon-menu::after {
        transform: rotate(-45deg); 
     }
     .header:target .icon-menu {
         display: none;
     }
     .header:target .close-icon-menu{
        display: flex;
    }
    .header__button {
        padding: 16px 20px;
    }
}














    img {
        vertical-align: top;
    }
    .navbar {
        padding-block: 1rem;
    }
    .nav-list {
        position: relative;
    }
    
    
    
</style>
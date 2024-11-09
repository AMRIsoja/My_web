@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Salsa&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: #232328;
  font-family: "Quicksand", sans-serif;
}

.swiper-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  width: 100%;
  height: 100vh;
}

/* content */

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 14%;
  left: 3%;
  width: 40%;
  height: max-content;
  color: #f2f2f2;
  text-align: center;
  padding: 20px;
  opacity: 0;
  z-index: 2;
}

.content h1 {
  font-family: "Salsa", cursive;
  font-size: clamp(2rem, 3vw, 6rem);
  margin-bottom: 20px;
  opacity: 0;
}

.content p {
  font-family: inherit;
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 500;
  opacity: 0;
}

.swiper-slide-active .content {
  opacity: 1;
}

.swiper-slide-active .content h1 {
  animation: moveDown 0.8s ease-in forwards;
}

.swiper-slide-active .content p {
  animation: moveDown 1s ease-in forwards;
  animation-delay: 1s;
}

@keyframes moveDown {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* background */

.background[data-item="one"] {
  background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/dd28eb02-d6b1-401e-bc10-aead024e9ebf);
  background-size: cover;
  background-position: 50% 40%;
}

.background[data-item="two"] {
  background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fc70e01c-17f9-4e74-a967-f039285524c5);
  background-size: cover;
  background-position: 50% 50%;
}

.background[data-item="three"] {
  background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4e3edcf1-1b68-408f-87e2-ee9fd477bf87);
  background-size: cover;
  background-position: 50% 40%;
}

.background[data-item="four"] {
  background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b772933f-6340-4c95-8d06-d809c4c9b739);
  background-size: cover;
  background-position: 50% 60%;
}

.background[data-item="five"] {
  background: url(https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9f0fab6b-c28d-47e9-80f0-868e00562c3f);
  background-size: cover;
  background-position: 50% 40%;
}

.background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  clip-path: circle(5%);
  filter: brightness(90%);
  overflow: hidden;
  opacity: 0;
  z-index: 1;
}

.animation {
  animation: resizeClipPath 3s ease-in-out forwards;
}

@keyframes resizeClipPath {
  0% {
    clip-path: circle(5%);
    opacity: 0;
  }
  100% {
    clip-path: circle(71%);
    opacity: 1;
  }
}

/* pagination bullet */

.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background-color: #a3a6a3;
  border-radius: 50%;
  transition: all 0.6s ease-in-out;
}

.swiper-pagination-bullet-active {
  height: 32px;
  background-image: linear-gradient(180deg, #f09819 0%, #ff512f 100%);
  border-radius: 14px;
}

/* footer */

.footer {
  position: absolute;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  bottom: 0;
  left: 50%;
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  width: max-content;
  padding: 20px;
  color: #f2f2f2;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  z-index: 2;
}

.feature {
  display: flex;
  align-items: center;
  column-gap: 12px;
}

.feature i {
  font-size: 1.4rem;
}

.feature p {
  font-weight: 700;
}

.btn {
  display: block;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 20px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  background-size: 200% auto;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: 0.5s;
}

.btn:hover {
  background-position: right center;
}

.btn:active {
  transform: scale(0.95);
}

.logo {
  position: fixed;
  right: -20px;
  bottom: -35px;
  z-index: 10;
}

.logo img {
  width: 120px;
}

@media (max-width: 890px) {
  .logo {
  right: -10px;
  bottom: -20px;
}
  
 .logo img {
  width: 80px;
  }
}

/* media queries */

@media (max-width: 1200px) {
  .content {
    top: 18%;
  }

  .content[data-content="two"],
  .content[data-content="three"] {
    top: 5%;
    width: 50%;
  }
}

@media (max-width: 900px) {
  .content,
  .content[data-content="three"] {
    top: 55%;
    left: 2%;
    width: 60%;
  }

  .content[data-content="two"] {
    top: 10%;
  }

  .content h1 {
    margin-bottom: 14px;
  }

  .content p {
    font-size: 1rem;
    line-height: 1.4;
  }

  .feature i {
    font-size: 1.3rem;
  }

  .feature p {
    font-size: 1rem;
  }

  .btn {
    padding: 8px 16px;
  }
}

@media (max-width: 790px) {
  .footer {
    column-gap: 10px;
  }

  .feature i {
    font-size: 1.1rem;
  }

  .feature p {
    font-size: 0.9rem;
  }

  .feature small {
    font-size: 0.8rem;
  }

  .btn {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}

@media (max-width: 660px) {
  .content,
  .content[data-content="two"],
  .content[data-content="three"] {
    top: unset;
    left: 2%;
    bottom: 3%;
    width: 80%;
  }

  .content p {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .background[data-item="two"] {
    background-position: 40% 50%;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    height: 24px;
  }

  .footer {
    column-gap: 0;
    left: unset;
    bottom: unset;
    top: 20px;
    right: -30px;
    padding: 0;
    border-radius: 0;
    border: 0;
    background-color: transparent;
    box-shadow: unset;
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
  }

  .feature,
  hr {
    display: none;
  }
}


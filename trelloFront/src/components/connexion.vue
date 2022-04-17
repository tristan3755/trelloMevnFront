<template>
  <form class="formSignUp" @submit.prevent v-if="formConnect == false">
    <a class="cross" href="http://localhost:3000"
      ><svg
        width="100%"
        height="100%"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 10L277 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M276.5 10L9.99999 276.5"
          stroke="white"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
    </a>
    <input
      type="email"
      name="username"
      required
      v-model="user"
      placeholder="votre mail qui servira d'identifiant"
    />
    <input
      type="password"
      name="passeword"
      required
      v-model="pass1"
      placeholder="votre mot de passe"
    />
    <button @click="submitInscription">Connexion</button>
    <p class="passwordKo" v-if="toggleInscriptionIssues == true">problème de connexion</p>
  </form>
  <article class="getAll" v-if="formConnect == true">
    <div class="contener-post contener-tasks">
      <p class="title-contener">Tasks</p>
      <div v-for="post in arrayPostit" class="post">
      <p class="title-post">{{post.title}}</p>
       <p class="text-post">{{post.text}}</p>
      </div>
    </div>
    <div class="contener-post">
      <p class="title-contener">In progress</p>
    </div>
    <div class="contener-post">
      <p class="title-contener">Done!</p>
    </div>
    <form class="addPost" v-if="formPostAdd == true" @submit.prevent>
      <input type="text" name="title" v-model="titlePost" required placeholder="title" />
      <textarea
        type="text"
        name="text"
        v-model="textPost"
        required
        placeholder="Text"
      ></textarea>
      <input type="hidden" name="id_user" v-model="userId" required />
      <button @click="submitPost">add task</button>
    </form>
  </article>
  <article class="dashboard" v-if="formConnect == true">
    <div class="button">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1490 1544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M293.376 353.376C47.5413 599.211 47.5413 997.789 293.376 1243.62C539.211 1489.46 937.789 1489.46 1183.62 1243.62C1429.46 997.789 1429.46 599.211 1183.62 353.376"
          stroke="#0FBCF9"
          stroke-width="30"
          stroke-linecap="round"
        />
        <path
          d="M745 115L745 772"
          stroke="#0FBCF9"
          stroke-width="30"
          stroke-linecap="round"
        />
        <g filter="url(#filter0_f_0_1)">
          <path
            d="M300.123 354.124C54.2883 599.959 54.2883 998.536 300.123 1244.37C545.958 1490.21 944.536 1490.21 1190.37 1244.37C1436.21 998.536 1436.21 599.959 1190.37 354.124"
            stroke="#0FBCF9"
            stroke-width="30"
            stroke-linecap="round"
          />
        </g>
        <g filter="url(#filter1_f_0_1)">
          <path
            d="M751.747 115.748L751.747 772.748"
            stroke="#0FBCF9"
            stroke-width="30"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="0.74707"
            y="239.124"
            width="1489"
            height="1304.62"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_0_1" />
          </filter>
          <filter
            id="filter1_f_0_1"
            x="636.747"
            y="0.747559"
            width="230"
            height="887"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_0_1" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="button" @click="addPostForm()">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 105 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.2578 33.3867V22.5078C34.2578 21.6745 34.0885 20.9518 33.75 20.3398C33.4245 19.7148 32.9297 19.2331 32.2656 18.8945C31.6016 18.556 30.7812 18.3867 29.8047 18.3867C28.8932 18.3867 28.0924 18.543 27.4023 18.8555C26.7253 19.168 26.1914 19.5781 25.8008 20.0859C25.4232 20.5938 25.2344 21.1406 25.2344 21.7266H21.6211C21.6211 20.9714 21.8164 20.2227 22.207 19.4805C22.5977 18.7383 23.1576 18.0677 23.8867 17.4688C24.6289 16.8568 25.5143 16.375 26.543 16.0234C27.5846 15.6589 28.7435 15.4766 30.0195 15.4766C31.556 15.4766 32.9102 15.737 34.082 16.2578C35.2669 16.7786 36.1914 17.5664 36.8555 18.6211C37.5326 19.6628 37.8711 20.9714 37.8711 22.5469V32.3906C37.8711 33.0938 37.9297 33.8424 38.0469 34.6367C38.1771 35.431 38.3659 36.1146 38.6133 36.6875V37H34.8438C34.6615 36.5833 34.5182 36.0299 34.4141 35.3398C34.3099 34.6367 34.2578 33.9857 34.2578 33.3867ZM34.8828 24.1875L34.9219 26.7266H31.2695C30.2409 26.7266 29.3229 26.8112 28.5156 26.9805C27.7083 27.1367 27.0312 27.3776 26.4844 27.7031C25.9375 28.0286 25.5208 28.4388 25.2344 28.9336C24.9479 29.4154 24.8047 29.9818 24.8047 30.6328C24.8047 31.2969 24.9544 31.9023 25.2539 32.4492C25.5534 32.9961 26.0026 33.4323 26.6016 33.7578C27.2135 34.0703 27.9622 34.2266 28.8477 34.2266C29.9544 34.2266 30.931 33.9922 31.7773 33.5234C32.6237 33.0547 33.2943 32.4818 33.7891 31.8047C34.2969 31.1276 34.5703 30.4701 34.6094 29.832L36.1523 31.5703C36.0612 32.1172 35.8138 32.7227 35.4102 33.3867C35.0065 34.0508 34.4661 34.6888 33.7891 35.3008C33.125 35.8997 32.3307 36.401 31.4062 36.8047C30.4948 37.1953 29.4661 37.3906 28.3203 37.3906C26.888 37.3906 25.6315 37.1107 24.5508 36.5508C23.4831 35.9909 22.6497 35.2422 22.0508 34.3047C21.4648 33.3542 21.1719 32.293 21.1719 31.1211C21.1719 29.9883 21.3932 28.9922 21.8359 28.1328C22.2786 27.2604 22.9167 26.5378 23.75 25.9648C24.5833 25.3789 25.5859 24.9362 26.7578 24.6367C27.9297 24.3372 29.2383 24.1875 30.6836 24.1875H34.8828ZM56.875 32.8984V7H60.5078V37H57.1875L56.875 32.8984ZM42.6562 26.668V26.2578C42.6562 24.6432 42.8516 23.1784 43.2422 21.8633C43.6458 20.5352 44.2122 19.3958 44.9414 18.4453C45.6836 17.4948 46.5625 16.7656 47.5781 16.2578C48.6068 15.737 49.7526 15.4766 51.0156 15.4766C52.3438 15.4766 53.5026 15.7109 54.4922 16.1797C55.4948 16.6354 56.3411 17.306 57.0312 18.1914C57.7344 19.0638 58.2878 20.1185 58.6914 21.3555C59.0951 22.5924 59.375 23.9922 59.5312 25.5547V27.3516C59.388 28.901 59.1081 30.2943 58.6914 31.5312C58.2878 32.7682 57.7344 33.8229 57.0312 34.6953C56.3411 35.5677 55.4948 36.2383 54.4922 36.707C53.4896 37.1628 52.3177 37.3906 50.9766 37.3906C49.7396 37.3906 48.6068 37.1237 47.5781 36.5898C46.5625 36.056 45.6836 35.3073 44.9414 34.3438C44.2122 33.3802 43.6458 32.2474 43.2422 30.9453C42.8516 29.6302 42.6562 28.2044 42.6562 26.668ZM46.2891 26.2578V26.668C46.2891 27.7227 46.3932 28.7122 46.6016 29.6367C46.8229 30.5612 47.1615 31.375 47.6172 32.0781C48.0729 32.7812 48.6523 33.3346 49.3555 33.7383C50.0586 34.1289 50.8984 34.3242 51.875 34.3242C53.0729 34.3242 54.056 34.0703 54.8242 33.5625C55.6055 33.0547 56.2305 32.3841 56.6992 31.5508C57.168 30.7174 57.5326 29.8125 57.793 28.8359V24.1289C57.6367 23.4128 57.4089 22.7227 57.1094 22.0586C56.8229 21.3815 56.4453 20.7826 55.9766 20.2617C55.5208 19.7279 54.9544 19.3047 54.2773 18.9922C53.6133 18.6797 52.8255 18.5234 51.9141 18.5234C50.9245 18.5234 50.0716 18.7318 49.3555 19.1484C48.6523 19.5521 48.0729 20.112 47.6172 20.8281C47.1615 21.5312 46.8229 22.3516 46.6016 23.2891C46.3932 24.2135 46.2891 25.2031 46.2891 26.2578ZM79.4531 32.8984V7H83.0859V37H79.7656L79.4531 32.8984ZM65.2344 26.668V26.2578C65.2344 24.6432 65.4297 23.1784 65.8203 21.8633C66.224 20.5352 66.7904 19.3958 67.5195 18.4453C68.2617 17.4948 69.1406 16.7656 70.1562 16.2578C71.1849 15.737 72.3307 15.4766 73.5938 15.4766C74.9219 15.4766 76.0807 15.7109 77.0703 16.1797C78.0729 16.6354 78.9193 17.306 79.6094 18.1914C80.3125 19.0638 80.8659 20.1185 81.2695 21.3555C81.6732 22.5924 81.9531 23.9922 82.1094 25.5547V27.3516C81.9661 28.901 81.6862 30.2943 81.2695 31.5312C80.8659 32.7682 80.3125 33.8229 79.6094 34.6953C78.9193 35.5677 78.0729 36.2383 77.0703 36.707C76.0677 37.1628 74.8958 37.3906 73.5547 37.3906C72.3177 37.3906 71.1849 37.1237 70.1562 36.5898C69.1406 36.056 68.2617 35.3073 67.5195 34.3438C66.7904 33.3802 66.224 32.2474 65.8203 30.9453C65.4297 29.6302 65.2344 28.2044 65.2344 26.668ZM68.8672 26.2578V26.668C68.8672 27.7227 68.9714 28.7122 69.1797 29.6367C69.401 30.5612 69.7396 31.375 70.1953 32.0781C70.651 32.7812 71.2305 33.3346 71.9336 33.7383C72.6367 34.1289 73.4766 34.3242 74.4531 34.3242C75.651 34.3242 76.6341 34.0703 77.4023 33.5625C78.1836 33.0547 78.8086 32.3841 79.2773 31.5508C79.7461 30.7174 80.1107 29.8125 80.3711 28.8359V24.1289C80.2148 23.4128 79.987 22.7227 79.6875 22.0586C79.401 21.3815 79.0234 20.7826 78.5547 20.2617C78.099 19.7279 77.5326 19.3047 76.8555 18.9922C76.1914 18.6797 75.4036 18.5234 74.4922 18.5234C73.5026 18.5234 72.6497 18.7318 71.9336 19.1484C71.2305 19.5521 70.651 20.112 70.1953 20.8281C69.7396 21.5312 69.401 22.3516 69.1797 23.2891C68.9714 24.2135 68.8672 25.2031 68.8672 26.2578Z"
          fill="#0FBCF9"
        />
        <g filter="url(#filter0_f_708_21)">
          <path
            d="M34.2578 33.3867V22.5078C34.2578 21.6745 34.0885 20.9518 33.75 20.3398C33.4245 19.7148 32.9297 19.2331 32.2656 18.8945C31.6016 18.556 30.7812 18.3867 29.8047 18.3867C28.8932 18.3867 28.0924 18.543 27.4023 18.8555C26.7253 19.168 26.1914 19.5781 25.8008 20.0859C25.4232 20.5938 25.2344 21.1406 25.2344 21.7266H21.6211C21.6211 20.9714 21.8164 20.2227 22.207 19.4805C22.5977 18.7383 23.1576 18.0677 23.8867 17.4688C24.6289 16.8568 25.5143 16.375 26.543 16.0234C27.5846 15.6589 28.7435 15.4766 30.0195 15.4766C31.556 15.4766 32.9102 15.737 34.082 16.2578C35.2669 16.7786 36.1914 17.5664 36.8555 18.6211C37.5326 19.6628 37.8711 20.9714 37.8711 22.5469V32.3906C37.8711 33.0938 37.9297 33.8424 38.0469 34.6367C38.1771 35.431 38.3659 36.1146 38.6133 36.6875V37H34.8438C34.6615 36.5833 34.5182 36.0299 34.4141 35.3398C34.3099 34.6367 34.2578 33.9857 34.2578 33.3867ZM34.8828 24.1875L34.9219 26.7266H31.2695C30.2409 26.7266 29.3229 26.8112 28.5156 26.9805C27.7083 27.1367 27.0312 27.3776 26.4844 27.7031C25.9375 28.0286 25.5208 28.4388 25.2344 28.9336C24.9479 29.4154 24.8047 29.9818 24.8047 30.6328C24.8047 31.2969 24.9544 31.9023 25.2539 32.4492C25.5534 32.9961 26.0026 33.4323 26.6016 33.7578C27.2135 34.0703 27.9622 34.2266 28.8477 34.2266C29.9544 34.2266 30.931 33.9922 31.7773 33.5234C32.6237 33.0547 33.2943 32.4818 33.7891 31.8047C34.2969 31.1276 34.5703 30.4701 34.6094 29.832L36.1523 31.5703C36.0612 32.1172 35.8138 32.7227 35.4102 33.3867C35.0065 34.0508 34.4661 34.6888 33.7891 35.3008C33.125 35.8997 32.3307 36.401 31.4062 36.8047C30.4948 37.1953 29.4661 37.3906 28.3203 37.3906C26.888 37.3906 25.6315 37.1107 24.5508 36.5508C23.4831 35.9909 22.6497 35.2422 22.0508 34.3047C21.4648 33.3542 21.1719 32.293 21.1719 31.1211C21.1719 29.9883 21.3932 28.9922 21.8359 28.1328C22.2786 27.2604 22.9167 26.5378 23.75 25.9648C24.5833 25.3789 25.5859 24.9362 26.7578 24.6367C27.9297 24.3372 29.2383 24.1875 30.6836 24.1875H34.8828ZM56.875 32.8984V7H60.5078V37H57.1875L56.875 32.8984ZM42.6562 26.668V26.2578C42.6562 24.6432 42.8516 23.1784 43.2422 21.8633C43.6458 20.5352 44.2122 19.3958 44.9414 18.4453C45.6836 17.4948 46.5625 16.7656 47.5781 16.2578C48.6068 15.737 49.7526 15.4766 51.0156 15.4766C52.3438 15.4766 53.5026 15.7109 54.4922 16.1797C55.4948 16.6354 56.3411 17.306 57.0312 18.1914C57.7344 19.0638 58.2878 20.1185 58.6914 21.3555C59.0951 22.5924 59.375 23.9922 59.5312 25.5547V27.3516C59.388 28.901 59.1081 30.2943 58.6914 31.5312C58.2878 32.7682 57.7344 33.8229 57.0312 34.6953C56.3411 35.5677 55.4948 36.2383 54.4922 36.707C53.4896 37.1628 52.3177 37.3906 50.9766 37.3906C49.7396 37.3906 48.6068 37.1237 47.5781 36.5898C46.5625 36.056 45.6836 35.3073 44.9414 34.3438C44.2122 33.3802 43.6458 32.2474 43.2422 30.9453C42.8516 29.6302 42.6562 28.2044 42.6562 26.668ZM46.2891 26.2578V26.668C46.2891 27.7227 46.3932 28.7122 46.6016 29.6367C46.8229 30.5612 47.1615 31.375 47.6172 32.0781C48.0729 32.7812 48.6523 33.3346 49.3555 33.7383C50.0586 34.1289 50.8984 34.3242 51.875 34.3242C53.0729 34.3242 54.056 34.0703 54.8242 33.5625C55.6055 33.0547 56.2305 32.3841 56.6992 31.5508C57.168 30.7174 57.5326 29.8125 57.793 28.8359V24.1289C57.6367 23.4128 57.4089 22.7227 57.1094 22.0586C56.8229 21.3815 56.4453 20.7826 55.9766 20.2617C55.5208 19.7279 54.9544 19.3047 54.2773 18.9922C53.6133 18.6797 52.8255 18.5234 51.9141 18.5234C50.9245 18.5234 50.0716 18.7318 49.3555 19.1484C48.6523 19.5521 48.0729 20.112 47.6172 20.8281C47.1615 21.5312 46.8229 22.3516 46.6016 23.2891C46.3932 24.2135 46.2891 25.2031 46.2891 26.2578ZM79.4531 32.8984V7H83.0859V37H79.7656L79.4531 32.8984ZM65.2344 26.668V26.2578C65.2344 24.6432 65.4297 23.1784 65.8203 21.8633C66.224 20.5352 66.7904 19.3958 67.5195 18.4453C68.2617 17.4948 69.1406 16.7656 70.1562 16.2578C71.1849 15.737 72.3307 15.4766 73.5938 15.4766C74.9219 15.4766 76.0807 15.7109 77.0703 16.1797C78.0729 16.6354 78.9193 17.306 79.6094 18.1914C80.3125 19.0638 80.8659 20.1185 81.2695 21.3555C81.6732 22.5924 81.9531 23.9922 82.1094 25.5547V27.3516C81.9661 28.901 81.6862 30.2943 81.2695 31.5312C80.8659 32.7682 80.3125 33.8229 79.6094 34.6953C78.9193 35.5677 78.0729 36.2383 77.0703 36.707C76.0677 37.1628 74.8958 37.3906 73.5547 37.3906C72.3177 37.3906 71.1849 37.1237 70.1562 36.5898C69.1406 36.056 68.2617 35.3073 67.5195 34.3438C66.7904 33.3802 66.224 32.2474 65.8203 30.9453C65.4297 29.6302 65.2344 28.2044 65.2344 26.668ZM68.8672 26.2578V26.668C68.8672 27.7227 68.9714 28.7122 69.1797 29.6367C69.401 30.5612 69.7396 31.375 70.1953 32.0781C70.651 32.7812 71.2305 33.3346 71.9336 33.7383C72.6367 34.1289 73.4766 34.3242 74.4531 34.3242C75.651 34.3242 76.6341 34.0703 77.4023 33.5625C78.1836 33.0547 78.8086 32.3841 79.2773 31.5508C79.7461 30.7174 80.1107 29.8125 80.3711 28.8359V24.1289C80.2148 23.4128 79.987 22.7227 79.6875 22.0586C79.401 21.3815 79.0234 20.7826 78.5547 20.2617C78.099 19.7279 77.5326 19.3047 76.8555 18.9922C76.1914 18.6797 75.4036 18.5234 74.4922 18.5234C73.5026 18.5234 72.6497 18.7318 71.9336 19.1484C71.2305 19.5521 70.651 20.112 70.1953 20.8281C69.7396 21.5312 69.401 22.3516 69.1797 23.2891C68.9714 24.2135 68.8672 25.2031 68.8672 26.2578Z"
            fill="#0FBCF9"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_708_21"
            x="17.1719"
            y="3"
            width="69.9141"
            height="38.3906"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_708_21" />
          </filter>
        </defs>
      </svg>
    </div>
  </article>
</template>

<script setup>
import { ref,onMounted } from "vue";
let user = ref("");
let pass1 = ref("");
let toggleInscriptionIssues = ref(null);
let urlConnexion = "http://localhost:4000/users/connexion";
let urlPost = "http://localhost:4000/post/add";
let urlGet = "http://localhost:4000/post/find/";
let token = ref("");
let userId = ref("");
let formConnect = ref(false);
let formPostAdd = ref(false);
let titlePost = ref("");
let textPost = ref("");
let arrayPostit=ref()
function submitInscription() {
  fetch(urlConnexion, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ username: user.value, password: pass1.value }),
  })
    .then((res) => res.json())
    .then((res) => {
      (token.value = res.token), (userId.value = res.userId);
      console.log(res.code, res.token, res.userId);
      if (res.code == 401) {
        toggleInscriptionIssues.value = true;
      } else {
        toggleInscriptionIssues.value = false;
        formConnect.value = !formConnect.value;
        getAll();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
/*add post*/
function submitPost() {
  fetch(urlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer" + " " + token.value,
    },
    body: JSON.stringify({
      title: titlePost.value,
      text: textPost.value,
      id_user: userId.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.code == 401) {
        console.log(res);
        console.log(res.code);
      } else {
        getAll();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
/*add post*/
/*get ALL post*/
function getAll() {
  fetch(urlGet + userId.value, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer" + " " + token.value,
    },
  })
    .then((res) => res.json())
    .then((res) => {
    arrayPostit.value=res
      console.log(arrayPostit.value);
    })
    .catch((err) => {
      console.log(err);
    });
}

/*add post*/
function addPostForm() {
  formPostAdd.value = !formPostAdd.value;
}
/*draf and drop*/

/*draf and drop*/
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
.formSignUp {
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  animation: fade-in linear forwards 0.5s;
  @keyframes fade-in {
    from {
      transform: translate(-20vw);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translate(0vw);
    }
  }
  .cross {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 30vw;
    border-bottom: solid 1px white;
    height: 100px;
    color: white;
    margin: 2.5rem;
  }
  button {
    width: 200px;
    height: 60px;
    border: solid 1px white;
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
  .passwordKo {
    color: white;
    width: 250px;
    padding: 2rem;
    background-color: #c0392b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
}
.getAll {
  width: 100%;
  min-height: 100vh;
  background-color: #1e272e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .contener-post {
    min-height: 80vh;
    border-radius: 5px;
    width: 25vw;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0fbcf9;
    border: 2px solid #0fbcf9;
    &.contener-post:nth-child(1) {
      margin-left: 10rem;
    }
    p {
      color: whitesmoke;
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 5px;
    }
    .post{
      width: 90%;
      height: auto;
      background-color: #1a2127;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: 2rem;
      .title-post{
        font-size: 1.5rem;
      }
       .text-post{
        font-size: 1rem;
        align-self: flex-start;
        margin: 1rem;
      }
    }
  }
}
.dashboard {
  width: 10vw;
  min-height: 100vh;
  border: 2px solid;
  border-top-color: #0fbcf9;
  border-right-color: #0fbcf9;
  border-bottom-color: #0fbcf9;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #1e272e;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
  .button {
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background: #1e272e;
    box-shadow: 20px 20px 17px #1d252c, -20px -20px 17px #1f2930;
    &:hover {
      cursor: pointer;
      background: #1e272e;
      box-shadow: inset 20px 20px 60px #1a2127, inset -20px -20px 60px #232d35;
    }
  }
}
.addPost {
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: #1e272e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: transparent;
    width: 30vw;
    border-bottom: solid 1px #0fbcf9;
    height: 100px;
    color: white;
    margin: 2.5rem;
  }
  textarea {
    border-top: none;
    border-left: none;
    border-right: none;
    resize: none;
    width: 30vw;
    border-bottom: solid 1px #0fbcf9;
    min-height: 40vh;
    background-color: transparent;
    color: white;
  }
  button {
    width: 200px;
    height: 60px;
    border: solid 1px #0fbcf9;
    background-color: transparent;
    border-radius: 5px;
    color: white;
  }
}
</style>

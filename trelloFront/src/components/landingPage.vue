<template>
  <article class="page-Landing">
    <div class="toggle-color">
      <div class="orange" @click="toggleColorChange"></div>
      <div class="violet" @click="toggleColorChangeViolet"></div>
      <div class="green" @click="toggleColorChangeGreen"></div>
    </div>
    <div class="logo">
      <svg
        v-if="
          toggleColorOrange == false &&
          toggleColorViolet == false &&
          toggleColorGreen == false
        "
        width="100%"
        height="100%"
        viewBox="0 0 1344 995"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M692 234V790" stroke="white" stroke-width="5" stroke-linecap="round" />
        <path
          d="M494.475 483.188C581.353 390.319 576.496 244.605 483.627 157.727C390.759 70.849 245.045 75.7054 158.167 168.574C71.2884 261.443 76.1448 407.157 169.014 494.035"
          stroke="#02DEF9"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter0_f_122_102)">
          <path
            d="M494.297 483.891C581.175 391.022 576.319 245.308 483.45 158.43C390.581 71.5516 244.867 76.408 157.989 169.277C71.1107 262.146 75.9671 407.86 168.836 494.738"
            stroke="#02DEF9"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M202.482 404.741C245.996 473.013 336.617 493.083 404.889 449.568C473.161 406.053 493.23 315.432 449.715 247.16C406.201 178.889 315.58 158.819 247.308 202.334"
          stroke="#02DEF9"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter1_f_122_102)">
          <path
            d="M202.077 404.52C245.591 472.792 336.212 492.861 404.484 449.347C472.756 405.832 492.825 315.211 449.311 246.939C405.796 178.667 315.175 158.598 246.903 202.113"
            stroke="#02DEF9"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M228.346 619.3C171.739 678.643 173.957 772.64 233.3 829.247C292.644 885.854 386.64 883.636 443.247 824.293C499.854 764.949 497.636 670.953 438.293 614.346"
          stroke="#02DEF9"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter2_f_122_102)">
          <path
            d="M226.052 610.751C170.226 670.83 173.673 764.789 233.751 820.615C293.83 876.442 387.789 872.995 443.615 812.916C499.442 752.838 495.995 658.878 435.916 603.052"
            stroke="#02DEF9"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M788.592 554.008C779.28 554.008 770.784 551.848 763.104 547.528C755.424 543.112 749.328 537.016 744.816 529.24C740.4 521.368 738.192 512.536 738.192 502.744C738.192 492.952 740.4 484.168 744.816 476.392C749.328 468.52 755.424 462.424 763.104 458.104C770.784 453.688 779.28 451.48 788.592 451.48C798 451.48 806.544 453.688 814.224 458.104C821.904 462.424 827.952 468.472 832.368 476.248C836.784 484.024 838.992 492.856 838.992 502.744C838.992 512.632 836.784 521.464 832.368 529.24C827.952 537.016 821.904 543.112 814.224 547.528C806.544 551.848 798 554.008 788.592 554.008ZM788.592 542.632C795.6 542.632 801.888 541 807.456 537.736C813.12 534.472 817.536 529.816 820.704 523.768C823.968 517.72 825.6 510.712 825.6 502.744C825.6 494.68 823.968 487.672 820.704 481.72C817.536 475.672 813.168 471.016 807.6 467.752C802.032 464.488 795.696 462.856 788.592 462.856C781.488 462.856 775.152 464.488 769.584 467.752C764.016 471.016 759.6 475.672 756.336 481.72C753.168 487.672 751.584 494.68 751.584 502.744C751.584 510.712 753.168 517.72 756.336 523.768C759.6 529.816 764.016 534.472 769.584 537.736C775.248 541 781.584 542.632 788.592 542.632ZM869.395 486.904C871.699 482.392 874.963 478.888 879.187 476.392C883.507 473.896 888.739 472.648 894.883 472.648V486.184H891.427C876.739 486.184 869.395 494.152 869.395 510.088V553H856.291V474.088H869.395V486.904ZM942.554 472.792C949.37 472.792 955.322 474.28 960.41 477.256C965.594 480.232 969.434 483.976 971.93 488.488V474.088H985.178V554.728C985.178 561.928 983.642 568.312 980.57 573.88C977.498 579.544 973.082 583.96 967.322 587.128C961.658 590.296 955.034 591.88 947.45 591.88C937.082 591.88 928.442 589.432 921.53 584.536C914.618 579.64 910.538 572.968 909.29 564.52H922.25C923.69 569.32 926.666 573.16 931.178 576.04C935.69 579.016 941.114 580.504 947.45 580.504C954.65 580.504 960.506 578.248 965.018 573.736C969.626 569.224 971.93 562.888 971.93 554.728V538.168C969.338 542.776 965.498 546.616 960.41 549.688C955.322 552.76 949.37 554.296 942.554 554.296C935.546 554.296 929.162 552.568 923.402 549.112C917.738 545.656 913.274 540.808 910.01 534.568C906.746 528.328 905.114 521.224 905.114 513.256C905.114 505.192 906.746 498.136 910.01 492.088C913.274 485.944 917.738 481.192 923.402 477.832C929.162 474.472 935.546 472.792 942.554 472.792ZM971.93 513.4C971.93 507.448 970.73 502.264 968.33 497.848C965.93 493.432 962.666 490.072 958.538 487.768C954.506 485.368 950.042 484.168 945.146 484.168C940.25 484.168 935.786 485.32 931.754 487.624C927.722 489.928 924.506 493.288 922.106 497.704C919.706 502.12 918.506 507.304 918.506 513.256C918.506 519.304 919.706 524.584 922.106 529.096C924.506 533.512 927.722 536.92 931.754 539.32C935.786 541.624 940.25 542.776 945.146 542.776C950.042 542.776 954.506 541.624 958.538 539.32C962.666 536.92 965.93 533.512 968.33 529.096C970.73 524.584 971.93 519.352 971.93 513.4ZM1002.43 513.256C1002.43 505.192 1004.06 498.136 1007.32 492.088C1010.59 485.944 1015.05 481.192 1020.71 477.832C1026.47 474.472 1032.86 472.792 1039.87 472.792C1046.78 472.792 1052.78 474.28 1057.87 477.256C1062.95 480.232 1066.75 483.976 1069.24 488.488V474.088H1082.49V553H1069.24V538.312C1066.65 542.92 1062.76 546.76 1057.58 549.832C1052.49 552.808 1046.54 554.296 1039.72 554.296C1032.71 554.296 1026.38 552.568 1020.71 549.112C1015.05 545.656 1010.59 540.808 1007.32 534.568C1004.06 528.328 1002.43 521.224 1002.43 513.256ZM1069.24 513.4C1069.24 507.448 1068.04 502.264 1065.64 497.848C1063.24 493.432 1059.98 490.072 1055.85 487.768C1051.82 485.368 1047.35 484.168 1042.46 484.168C1037.56 484.168 1033.1 485.32 1029.07 487.624C1025.03 489.928 1021.82 493.288 1019.42 497.704C1017.02 502.12 1015.82 507.304 1015.82 513.256C1015.82 519.304 1017.02 524.584 1019.42 529.096C1021.82 533.512 1025.03 536.92 1029.07 539.32C1033.1 541.624 1037.56 542.776 1042.46 542.776C1047.35 542.776 1051.82 541.624 1055.85 539.32C1059.98 536.92 1063.24 533.512 1065.64 529.096C1068.04 524.584 1069.24 519.352 1069.24 513.4ZM1143.08 472.648C1152.68 472.648 1160.46 475.576 1166.41 481.432C1172.36 487.192 1175.34 495.544 1175.34 506.488V553H1162.38V508.36C1162.38 500.488 1160.41 494.488 1156.47 490.36C1152.54 486.136 1147.16 484.024 1140.35 484.024C1133.43 484.024 1127.91 486.184 1123.79 490.504C1119.75 494.824 1117.74 501.112 1117.74 509.368V553H1104.63V474.088H1117.74V485.32C1120.33 481.288 1123.83 478.168 1128.25 475.96C1132.76 473.752 1137.71 472.648 1143.08 472.648ZM1203.51 461.272C1201.02 461.272 1198.9 460.408 1197.18 458.68C1195.45 456.952 1194.58 454.84 1194.58 452.344C1194.58 449.848 1195.45 447.736 1197.18 446.008C1198.9 444.28 1201.02 443.416 1203.51 443.416C1205.91 443.416 1207.93 444.28 1209.56 446.008C1211.29 447.736 1212.15 449.848 1212.15 452.344C1212.15 454.84 1211.29 456.952 1209.56 458.68C1207.93 460.408 1205.91 461.272 1203.51 461.272ZM1209.85 474.088V553H1196.74V474.088H1209.85ZM1241.97 542.2H1280.71V553H1227V542.2L1265.3 484.744H1227.29V474.088H1280.42V484.744L1241.97 542.2Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_f_122_102"
            x="26.3786"
            y="26.8193"
            width="599.529"
            height="537.418"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_102" />
          </filter>
          <filter
            id="filter1_f_122_102"
            x="132.574"
            y="109.617"
            width="409.232"
            height="432.225"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_102" />
          </filter>
          <filter
            id="filter2_f_122_102"
            x="116.837"
            y="533.552"
            width="435.994"
            height="396.278"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_102" />
          </filter>
        </defs>
      </svg>
      <svg
        v-if="
          toggleColorOrange == true ||
          toggleColorViolet == true ||
          toggleColorGreen == true
        "
        width="100%"
        height="100%"
        viewBox="0 0 1344 995"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M691.318 233.58V789.58"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M493.792 482.768C580.671 389.899 575.814 244.185 482.945 157.307C390.076 70.4286 244.363 75.285 157.484 168.154C70.6063 261.023 75.4627 406.737 168.332 493.615"
          stroke="white"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter0_f_122_103)">
          <path
            d="M493.615 483.47C580.493 390.601 575.637 244.888 482.768 158.009C389.899 71.1312 244.185 75.9876 157.307 168.857C70.4288 261.725 75.2852 407.439 168.154 494.317"
            stroke="white"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M201.8 404.321C245.314 472.593 335.935 492.662 404.207 449.147C472.479 405.633 492.548 315.012 449.033 246.74C405.519 178.468 314.898 158.399 246.626 201.914"
          stroke="white"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter1_f_122_103)">
          <path
            d="M201.395 404.1C244.91 472.372 335.53 492.441 403.802 448.926C472.074 405.411 492.143 314.791 448.629 246.519C405.114 178.247 314.493 158.178 246.221 201.692"
            stroke="white"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M227.664 618.88C171.057 678.223 173.275 772.22 232.618 828.827C291.962 885.434 385.958 883.216 442.565 823.872C499.172 764.529 496.954 670.533 437.611 613.926"
          stroke="white"
          stroke-width="39"
          stroke-linecap="round"
        />
        <g filter="url(#filter2_f_122_103)">
          <path
            d="M225.37 610.331C169.544 670.409 172.991 764.369 233.069 820.195C293.148 876.021 387.107 872.574 442.933 812.496C498.76 752.417 495.313 658.458 435.234 602.632"
            stroke="white"
            stroke-width="39"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M787.91 553.588C778.598 553.588 770.102 551.428 762.422 547.108C754.742 542.692 748.646 536.596 744.134 528.82C739.718 520.948 737.51 512.116 737.51 502.324C737.51 492.532 739.718 483.748 744.134 475.972C748.646 468.1 754.742 462.004 762.422 457.684C770.102 453.268 778.598 451.06 787.91 451.06C797.318 451.06 805.862 453.268 813.542 457.684C821.222 462.004 827.27 468.052 831.686 475.828C836.102 483.604 838.31 492.436 838.31 502.324C838.31 512.212 836.102 521.044 831.686 528.82C827.27 536.596 821.222 542.692 813.542 547.108C805.862 551.428 797.318 553.588 787.91 553.588ZM787.91 542.212C794.918 542.212 801.206 540.58 806.774 537.316C812.438 534.052 816.854 529.396 820.022 523.348C823.286 517.3 824.918 510.292 824.918 502.324C824.918 494.26 823.286 487.252 820.022 481.3C816.854 475.252 812.486 470.596 806.918 467.332C801.35 464.068 795.014 462.436 787.91 462.436C780.806 462.436 774.47 464.068 768.902 467.332C763.334 470.596 758.918 475.252 755.654 481.3C752.486 487.252 750.902 494.26 750.902 502.324C750.902 510.292 752.486 517.3 755.654 523.348C758.918 529.396 763.334 534.052 768.902 537.316C774.566 540.58 780.902 542.212 787.91 542.212ZM868.713 486.484C871.017 481.972 874.281 478.468 878.505 475.972C882.825 473.476 888.057 472.228 894.201 472.228V485.764H890.745C876.057 485.764 868.713 493.732 868.713 509.668V552.58H855.609V473.668H868.713V486.484ZM941.872 472.372C948.688 472.372 954.64 473.86 959.728 476.836C964.912 479.812 968.752 483.556 971.248 488.068V473.668H984.496V554.308C984.496 561.508 982.96 567.892 979.888 573.46C976.816 579.124 972.4 583.54 966.64 586.708C960.976 589.876 954.352 591.46 946.768 591.46C936.4 591.46 927.76 589.012 920.848 584.116C913.936 579.22 909.856 572.548 908.608 564.1H921.568C923.008 568.9 925.984 572.74 930.496 575.62C935.008 578.596 940.432 580.084 946.768 580.084C953.968 580.084 959.824 577.828 964.336 573.316C968.944 568.804 971.248 562.468 971.248 554.308V537.748C968.656 542.356 964.816 546.196 959.728 549.268C954.64 552.34 948.688 553.876 941.872 553.876C934.864 553.876 928.48 552.148 922.72 548.692C917.056 545.236 912.592 540.388 909.328 534.148C906.064 527.908 904.432 520.804 904.432 512.836C904.432 504.772 906.064 497.716 909.328 491.668C912.592 485.524 917.056 480.772 922.72 477.412C928.48 474.052 934.864 472.372 941.872 472.372ZM971.248 512.98C971.248 507.028 970.048 501.844 967.648 497.428C965.248 493.012 961.984 489.652 957.856 487.348C953.824 484.948 949.36 483.748 944.464 483.748C939.568 483.748 935.104 484.9 931.072 487.204C927.04 489.508 923.824 492.868 921.424 497.284C919.024 501.7 917.824 506.884 917.824 512.836C917.824 518.884 919.024 524.164 921.424 528.676C923.824 533.092 927.04 536.5 931.072 538.9C935.104 541.204 939.568 542.356 944.464 542.356C949.36 542.356 953.824 541.204 957.856 538.9C961.984 536.5 965.248 533.092 967.648 528.676C970.048 524.164 971.248 518.932 971.248 512.98ZM1001.74 512.836C1001.74 504.772 1003.38 497.716 1006.64 491.668C1009.9 485.524 1014.37 480.772 1020.03 477.412C1025.79 474.052 1032.18 472.372 1039.18 472.372C1046.1 472.372 1052.1 473.86 1057.18 476.836C1062.27 479.812 1066.06 483.556 1068.56 488.068V473.668H1081.81V552.58H1068.56V537.892C1065.97 542.5 1062.08 546.34 1056.9 549.412C1051.81 552.388 1045.86 553.876 1039.04 553.876C1032.03 553.876 1025.7 552.148 1020.03 548.692C1014.37 545.236 1009.9 540.388 1006.64 534.148C1003.38 527.908 1001.74 520.804 1001.74 512.836ZM1068.56 512.98C1068.56 507.028 1067.36 501.844 1064.96 497.428C1062.56 493.012 1059.3 489.652 1055.17 487.348C1051.14 484.948 1046.67 483.748 1041.78 483.748C1036.88 483.748 1032.42 484.9 1028.38 487.204C1024.35 489.508 1021.14 492.868 1018.74 497.284C1016.34 501.7 1015.14 506.884 1015.14 512.836C1015.14 518.884 1016.34 524.164 1018.74 528.676C1021.14 533.092 1024.35 536.5 1028.38 538.9C1032.42 541.204 1036.88 542.356 1041.78 542.356C1046.67 542.356 1051.14 541.204 1055.17 538.9C1059.3 536.5 1062.56 533.092 1064.96 528.676C1067.36 524.164 1068.56 518.932 1068.56 512.98ZM1142.4 472.228C1152 472.228 1159.78 475.156 1165.73 481.012C1171.68 486.772 1174.66 495.124 1174.66 506.068V552.58H1161.7V507.94C1161.7 500.068 1159.73 494.068 1155.79 489.94C1151.86 485.716 1146.48 483.604 1139.66 483.604C1132.75 483.604 1127.23 485.764 1123.1 490.084C1119.07 494.404 1117.06 500.692 1117.06 508.948V552.58H1103.95V473.668H1117.06V484.9C1119.65 480.868 1123.15 477.748 1127.57 475.54C1132.08 473.332 1137.02 472.228 1142.4 472.228ZM1202.83 460.852C1200.33 460.852 1198.22 459.988 1196.49 458.26C1194.77 456.532 1193.9 454.42 1193.9 451.924C1193.9 449.428 1194.77 447.316 1196.49 445.588C1198.22 443.86 1200.33 442.996 1202.83 442.996C1205.23 442.996 1207.25 443.86 1208.88 445.588C1210.61 447.316 1211.47 449.428 1211.47 451.924C1211.47 454.42 1210.61 456.532 1208.88 458.26C1207.25 459.988 1205.23 460.852 1202.83 460.852ZM1209.17 473.668V552.58H1196.06V473.668H1209.17ZM1241.29 541.78H1280.03V552.58H1226.32V541.78L1264.62 484.324H1226.6V473.668H1279.74V484.324L1241.29 541.78Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_f_122_103"
            x="25.6968"
            y="26.3989"
            width="599.528"
            height="537.418"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_103" />
          </filter>
          <filter
            id="filter1_f_122_103"
            x="131.892"
            y="109.197"
            width="409.232"
            height="432.225"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_103" />
          </filter>
          <filter
            id="filter2_f_122_103"
            x="116.155"
            y="533.132"
            width="435.994"
            height="396.279"
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
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_122_103" />
          </filter>
        </defs>
      </svg>
    </div>
    <header>
      <nav>
        <a href="http://localhost:3000/connexion">log in </a>
        <a class="buttonSignIn" href="http://localhost:3000/inscription">Sign in</a>
      </nav>
    </header>
  </article>
</template>

<script setup>
import { ref } from "vue";

let colorOrange = ref("#020329");
let colorButtonOrange = ref("#FB7D22");
let colorButtonViolet = ref("#C41311");
let colorButtonGreen = ref("#FFC400");
let toggleColorOrange = ref(false);
let toggleColorViolet = ref(false);
let toggleColorGreen = ref(false);
function toggleColorChange() {
  toggleColorOrange.value = !toggleColorOrange.value;
  console.log(toggleColorOrange);
  toggleColorGreen.value = false;
  toggleColorViolet.value = false;
  if (toggleColorOrange.value == true) {
    colorOrange.value = "#FB7D22";
    colorButtonOrange.value = "#020329";
    colorButtonViolet.value = "#C41311";
    colorButtonGreen.value = "#FFC400";
  } else {
    colorOrange.value = "#020329";
    colorButtonOrange.value = "#FB7D22";
  }
}
function toggleColorChangeViolet() {
  toggleColorViolet.value = !toggleColorViolet.value;
  console.log(toggleColorViolet.value);
  toggleColorOrange.value = false;
  toggleColorGreen.value = false;
  if (toggleColorViolet.value == true) {
    colorOrange.value = "#C41311";
    colorButtonViolet.value = "#020329";
    colorButtonGreen.value = "#FFC400";
    colorButtonOrange.value = "#FB7D22";
  } else {
    colorOrange.value = "#020329";
    colorButtonViolet.value = "#C41311";
  }
}
function toggleColorChangeGreen() {
  toggleColorGreen.value = !toggleColorGreen.value;
  console.log(toggleColorGreen.value);
  toggleColorOrange.value = false;
  toggleColorViolet.value = false;
  if (toggleColorGreen.value == true) {
    colorOrange.value = "#FFC400";
    colorButtonGreen.value = "#020329";
    colorButtonViolet.value = "#C41311";
    colorButtonOrange.value = "#FB7D22";
  } else {
    colorOrange.value = "#020329";
    colorButtonGreen.value = "#FFC400";
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@mixin center($direction: column, $justify: center) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: $justify;
}
.page-Landing {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: v-bind(colorOrange);
  transition: ease-in-out 0.5s;
  .toggle-color {
    position: absolute;
    max-width: 150px;
    height: auto;
    top: 2rem;
    right: 2rem;
    @include center($justify: space-evenly);
    .orange {
      width: 80px;
      height: 80px;
      background-color: v-bind(colorButtonOrange);
      border: 2px solid white;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    .violet {
      width: 80px;
      height: 80px;
      border: 2px solid white;
      background-color: v-bind(colorButtonViolet);
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    .green {
      width: 80px;
      height: 80px;
      border: 2px solid white;
      background-color: v-bind(colorButtonGreen);
      border-radius: 50%;
    }
  }
  .logo {
    flex: 0.4;
    margin: auto;
    margin-top: 10rem;
  }
  header {
    position: absolute;
    min-height: 120px;
    width: 60%;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    @include center;
    nav {
      width: 60%;
      height: auto;
      @include center($direction: row, $justify: space-between);
      a {
        color: white;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        text-decoration: none;
        &:nth-child(2) {
          border: 1px solid white;
          padding: 1rem;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>

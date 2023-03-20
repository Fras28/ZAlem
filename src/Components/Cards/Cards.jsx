import React from "react";
import { Card } from "./Card/Card";

import "./Cards.css";

export const Cards = ({ products }) => {
  return (
    <div className="carta">
      <h2 className="titleSection">
      <svg  height="30" viewBox="0 0 672 572" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M162.912 258.919L165.595 265.357C172.746 282.435 179.507 298.586 181.485 316.539C180.725 321.722 177.819 342.061 177.746 351.113C177.501 387.05 187.756 423.306 206.62 453.217C213.876 464.732 222.459 475.487 232.136 485.195C233.959 487.023 236.35 487.935 238.746 487.935C241.126 487.935 243.516 487.023 245.339 485.211C248.985 481.565 248.996 475.659 245.355 472.008C236.657 463.289 228.943 453.617 222.423 443.263C205.439 416.331 196.199 383.643 196.423 351.241C196.48 343.887 199.121 324.84 200.131 318.121C200.246 317.361 200.267 316.585 200.189 315.814C198.105 294.617 190.34 276.069 182.829 258.126L180.167 251.787C176.599 243.157 174.412 236.465 173.042 230.058C168.016 206.839 174.058 183.162 190.026 163.375C195.521 156.573 201.964 150.766 208.947 145.849V150.114C208.947 155.265 213.13 159.448 218.281 159.448C223.432 159.448 227.614 155.265 227.614 150.114V135.698C231.713 134.063 235.885 132.662 240.156 131.667V139.313C240.156 144.464 244.338 148.646 249.489 148.646C254.64 148.646 258.822 144.464 258.822 139.313V129.459C258.859 129.459 258.895 129.454 258.942 129.454H259.057C285.587 129.454 310.39 141.235 327.13 161.771C330.677 166.125 338.052 166.125 341.599 161.771C358.339 141.24 383.151 129.454 409.682 129.454C425.218 129.454 440.489 133.558 453.838 141.339C458.275 143.928 463.999 142.428 466.598 137.969C469.197 133.511 467.687 127.797 463.229 125.209C447.035 115.771 428.515 110.782 409.677 110.782C381.146 110.782 354.239 122.022 334.359 141.949C314.485 122.022 287.578 110.782 259.067 110.782H258.927C255.864 110.782 252.812 111.053 249.77 111.329C249.671 111.329 249.593 111.272 249.494 111.272C249.317 111.272 249.156 111.36 248.979 111.376C237.286 112.558 225.817 115.782 215.052 120.808C214.792 120.907 214.552 121.011 214.307 121.131C199.531 128.157 186.135 138.522 175.515 151.658C156.198 175.565 148.641 205.59 154.797 233.991C156.87 243.741 160.416 252.877 162.911 258.918L162.912 258.919Z" fill="#9E4E04"/>
<path d="M472.312 351.239C472.531 383.66 463.302 416.343 446.312 443.275C435.125 461.03 420.135 476.702 402.916 489.248V465.623C403.26 465.394 403.661 465.285 403.984 464.998C437 435.347 447.536 392.102 448.624 387.269C450.707 378.087 447.921 367.555 441.171 359.113C433.265 349.217 421.416 343.545 408.66 343.545C400.837 343.545 388.223 345.524 370.051 349.607C346.702 354.941 322.01 354.93 298.639 349.602C280.508 345.524 267.89 343.545 260.06 343.545C247.331 343.545 235.492 349.222 227.587 359.118C220.816 367.592 218.024 378.145 220.108 387.347C220.868 390.728 239.468 469.587 305.988 487.983V490.062C305.988 497.02 307.503 503.764 310.28 509.931C296.316 506.848 282.884 501.118 270.848 493.024C269.212 491.936 267.598 490.816 266.014 489.665C261.853 486.639 256.009 487.566 252.983 491.743C249.957 495.915 250.884 501.753 255.061 504.779C256.837 506.071 258.639 507.326 260.452 508.535C278.873 520.915 300.14 528.561 321.957 530.649C322.254 530.681 322.561 530.696 322.858 530.696C324.29 530.696 325.613 530.28 326.848 529.681C334.999 535.347 344.432 538.483 354.488 538.483C371.326 538.483 386.909 529.53 395.576 515.461C396.576 515.289 397.56 515.019 398.508 514.498C401.742 512.727 405.029 510.711 408.274 508.524C429.82 494.045 448.435 474.914 462.102 453.217C480.962 423.31 491.222 387.045 490.976 351.072C490.909 344.525 490.127 338.264 489.362 332.212C488.258 323.399 487.211 315.081 488.523 306.946C490.346 295.582 494.93 284.686 499.883 273.602L501.054 270.972C508.482 254.41 516.158 237.29 516.158 217.175C516.158 189.659 505.684 163.55 486.648 143.648C483.085 139.929 477.174 139.794 473.445 143.357C469.721 146.919 469.585 152.831 473.153 156.56C488.846 172.966 497.486 194.492 497.486 217.174C497.486 233.294 490.945 247.882 484.008 263.336L482.82 265.992C477.357 278.257 472.263 290.399 470.081 303.981C468.357 314.757 469.612 324.815 470.836 334.528C471.57 340.325 472.258 345.793 472.31 351.236L472.312 351.239ZM430.416 383.166C430.093 384.614 423.182 414.108 402.916 439.026V414.438C409.411 411.318 413.646 404.412 412.875 396.995L409.927 362.364C416.474 362.724 422.51 365.672 426.583 370.781C429.781 374.765 431.244 379.504 430.416 383.166ZM374.176 367.822C383.098 365.811 390.536 364.363 396.531 363.431L399.495 398.248C399.724 400.457 398.104 402.472 395.911 402.743C394.14 402.946 391.552 402.78 389.26 398.405L385.87 392.634C385.718 392.374 385.495 392.186 385.317 391.957L382.781 385.848C381.354 382.42 377.411 380.801 373.995 382.228C370.625 383.634 369.036 387.457 370.338 390.842L362.265 392.181C353.203 393.681 343.38 394.493 333.937 394.545C324.427 394.493 314.604 393.681 305.536 392.186L297.135 390.795C298.395 387.42 296.823 383.629 293.468 382.233C290.026 380.816 286.104 382.426 284.682 385.853L281.703 393.019L278.375 398.707C276.26 402.774 273.625 402.957 271.911 402.738C269.692 402.467 268.083 400.446 268.317 398.123L271.291 363.285C277.437 364.201 285.166 365.701 294.537 367.811C320.599 373.764 348.151 373.754 374.176 367.822ZM242.176 370.775C246.057 365.915 251.702 363.046 257.864 362.457L254.922 396.869C253.958 406.317 260.844 414.932 270.271 416.082C271.099 416.187 271.927 416.233 272.745 416.233C280.094 416.233 286.521 412.155 290.125 405.213L291.177 403.421L303.349 405.437C304.208 405.577 305.125 405.629 305.99 405.765V440.847C302.266 439.577 298.906 438.384 296.859 437.571L295.865 432.478C295.672 431.462 295.214 430.582 294.641 429.795C292.021 425.129 286.568 421.478 280.807 421.077C272.167 420.524 264.401 425.394 261.067 433.024C244.635 409.868 238.698 384.978 238.302 383.227C237.489 379.566 238.958 374.796 242.176 370.775ZM270.974 445.228C271.505 444.535 271.906 443.728 272.14 442.822L273.015 439.416C273.802 436.332 276.703 434.233 279.864 434.478C281.172 434.567 282.687 435.817 282.942 436.442L284.286 443.348C284.286 443.353 284.291 443.364 284.291 443.369L285.906 451.666C286.531 454.874 289.349 457.108 292.5 457.108C292.927 457.108 293.349 457.062 293.791 456.983C296.218 456.515 297.979 454.744 298.75 452.572C300.901 453.332 303.302 454.155 306 455.046V468.343C291.708 463.364 280.151 454.979 270.974 445.228ZM354.495 523.551C346.63 523.551 339.26 520.931 333.192 516.004C325.395 509.592 320.916 500.14 320.916 490.067L320.922 407.4C325.25 407.707 329.614 407.952 333.927 407.973C338.25 407.952 342.635 407.702 346.984 407.389V431.431C346.984 435.551 350.323 438.9 354.453 438.9C358.583 438.9 361.922 435.556 361.922 431.431L361.916 405.743C362.745 405.618 363.625 405.571 364.442 405.43L376.62 403.415L377.5 404.91C379.984 409.675 383.661 413.04 387.974 414.811V490.061C387.974 495.171 386.875 499.999 384.656 504.504C379.177 516.077 367.334 523.551 354.495 523.551Z" fill="#9E4E04"/>
<path d="M362.152 296.372L374.777 282.528C378.251 278.721 377.98 272.82 374.173 269.341C370.355 265.867 364.46 266.133 360.981 269.945L348.355 283.789C344.881 287.596 345.152 293.497 348.96 296.977C350.751 298.612 353.007 299.419 355.257 299.419C357.783 299.414 360.309 298.393 362.152 296.372Z" fill="#9E4E04"/>
<path d="M313.472 299.412C315.722 299.412 317.972 298.605 319.769 296.97C323.577 293.496 323.847 287.59 320.368 283.782L307.733 269.938C304.269 266.136 298.368 265.871 294.545 269.334C290.738 272.808 290.467 278.714 293.946 282.522L306.582 296.366C308.426 298.392 310.951 299.412 313.472 299.412Z" fill="#9E4E04"/>
<path d="M120.352 323.533C121.988 333.793 122.795 340.563 123.436 346.054C124.555 355.627 125.3 361.945 129.243 376.549C140.451 418.169 155.795 475.163 205.232 518.109C254.67 561.021 307.003 569.687 334.363 571.057H334.446C334.634 571.057 334.827 571.057 335.009 571.041C361.815 569.692 414.149 561.015 463.503 518.104C512.774 475.297 528.217 418.369 539.566 376.557C543.509 361.942 544.254 355.63 545.373 346.057C546.009 340.599 546.816 333.88 548.426 323.74C609.623 319.604 671.999 257.313 671.999 198.141C671.999 162.198 658.348 129.157 634.551 107.48C611.223 86.2291 579.004 76.6518 541.275 79.4798C532.884 68.7871 524.848 60.7398 519.442 55.8078C475.286 15.2865 419.483 3.56246 380.788 0.786458C379.528 0.291672 378.169 0 376.736 0C375.804 0 374.913 0.151042 374.049 0.359375C368.965 0.114588 364.21 0 359.934 0C349.601 0 341.127 0.61459 335.841 1.31251C335.377 1.25522 334.914 1.17188 334.434 1.17188C333.627 1.17188 332.846 1.26042 332.091 1.42709C325.122 0.822934 317.465 0.46876 309.569 0.46876C272.236 0.46876 201.767 7.66142 149.369 55.7914C143.973 60.7133 135.984 68.7081 127.624 79.3274C91.2853 77.2441 60.1187 86.817 37.4213 107.483C13.6507 129.155 0 162.197 0 198.139C0 256.275 60.2133 317.478 120.355 323.535L120.352 323.533ZM619.472 124.053C638.608 141.485 649.592 168.485 649.592 198.141C649.592 243.239 599.858 294.177 552.415 300.933C552.899 298.344 553.394 295.745 553.951 292.86C555.707 283.891 557.378 275.824 558.977 268.438C568.946 266.855 578.967 262.485 588.357 255.475C592.493 252.392 593.347 246.543 590.264 242.418C587.196 238.287 581.347 237.438 577.206 240.511C572.732 243.85 568.149 246.35 563.597 248.022C566.165 237.152 568.441 228.219 570.383 220.672C576.581 196.49 579.686 184.355 577.425 163.875C577.133 161.297 576.722 158.797 576.305 156.286C583.222 158.354 589.321 162.078 593.889 167.5C601.186 176.146 604.097 187.797 602.327 201.188C601.28 209.141 597.483 217.928 591.603 225.928C588.556 230.079 589.452 235.928 593.613 238.97C595.28 240.194 597.207 240.777 599.124 240.777C601.998 240.777 604.827 239.454 606.66 236.959C614.462 226.329 619.368 214.798 620.832 203.626C623.275 185.153 618.78 168.047 608.16 155.459C599.004 144.605 586.149 137.907 571.581 136.205C567.592 123.319 562.191 111.647 556.221 101.387C581.967 101.747 603.248 109.272 619.472 124.053ZM164.499 72.3234C211.338 29.3021 275.488 22.8807 309.579 22.8807C314.266 22.8807 318.86 23.0162 323.24 23.2453V37.2093C323.24 43.3968 328.256 48.4072 334.438 48.4072C340.62 48.4072 345.636 43.3968 345.636 37.2093V22.8707C349.428 22.6155 354.23 22.4071 359.933 22.4071C361.642 22.4071 363.517 22.4279 365.532 22.4748V46.9122C365.532 53.0996 370.548 58.11 376.73 58.11C382.912 58.11 387.928 53.0996 387.928 46.9122V23.9908C420.788 27.5846 467.808 38.8548 504.319 72.3508C517.824 84.6634 549.813 118.481 555.147 166.351C556.959 182.763 554.704 191.575 548.673 215.122C544.506 231.362 538.808 253.611 531.97 288.57C525.897 319.69 524.293 333.424 523.106 343.455C522.033 352.637 521.434 357.71 517.866 370.955C507.345 409.747 492.929 462.872 448.798 501.21C404.839 539.423 358.465 547.36 334.402 548.652C310.329 547.361 263.949 539.423 219.918 501.21C175.647 462.751 161.33 409.57 150.877 370.731C147.361 357.715 146.762 352.652 145.694 343.46C144.845 336.241 143.746 326.982 140.944 310.81C140.929 310.752 140.929 310.69 140.913 310.638C139.83 304.388 138.517 297.206 136.83 288.575C129.991 253.596 124.272 231.34 120.106 215.102C114.059 191.58 111.804 182.774 113.663 166.352C118.913 118.546 150.944 84.6909 164.502 72.3256L164.499 72.3234ZM52.515 124.053C68.051 109.902 88.2176 102.422 112.51 101.49C106.468 111.86 101.036 123.683 97.051 136.725C83.8791 139.016 72.2697 145.47 63.8323 155.474C53.2126 168.063 48.7176 185.167 51.1604 203.635C52.2594 212.021 55.4104 220.886 60.2855 229.275C62.0095 232.255 65.1449 233.926 68.3636 233.926C69.9522 233.926 71.5667 233.525 73.0459 232.666C77.5043 230.078 79.0199 224.369 76.4262 219.911C72.7907 213.64 70.447 207.171 69.671 201.208C67.9002 187.823 70.8116 176.167 78.1084 167.526C81.9158 163.01 86.822 159.703 92.3271 157.473C91.999 159.593 91.6344 161.697 91.3948 163.874C89.0719 184.364 92.1917 196.494 98.4052 220.672C100.249 227.864 102.421 236.354 104.843 246.536C100.197 244.385 95.5823 241.421 91.1867 237.635C87.2804 234.265 81.3845 234.708 78.0148 238.614C74.6555 242.52 75.0878 248.411 78.994 251.775C88.5148 259.973 99.1033 265.447 109.677 267.811C111.312 275.369 113.036 283.639 114.843 292.869C115.364 295.535 115.807 297.91 116.26 300.311C69.8387 291.718 22.396 242.191 22.396 198.139C22.396 168.483 33.3804 141.483 52.516 124.051L52.515 124.053Z" fill="#9E4E04"/>
<path d="M354.459 444.812C350.329 444.812 346.99 448.156 346.99 452.281V464.219C346.99 468.339 350.329 471.688 354.459 471.688C358.589 471.688 361.928 468.344 361.928 464.219V452.281C361.928 448.156 358.584 444.812 354.459 444.812Z" fill="#9E4E04"/>
<path d="M272.913 277.999H201.531L220.118 260.549H220.122C223.253 257.569 223.238 252.778 220.086 249.818C216.934 246.859 211.83 246.845 208.656 249.784L178.605 278H152.887L187.689 245.327H187.693C190.823 242.347 190.809 237.556 187.656 234.597C184.504 231.637 179.401 231.624 176.227 234.563L141.425 267.239V171.444H301.287L272.913 277.999ZM530.57 277.999H460.961L479.549 260.549H479.553C482.683 257.569 482.669 252.778 479.517 249.818C476.364 246.859 471.261 246.845 468.087 249.784L438.036 278H412.318L447.12 245.327H447.123C450.254 242.347 450.239 237.556 447.087 234.597C443.935 231.637 438.832 231.624 435.658 234.563L397.142 270.722L370.707 171.448H530.57L530.57 277.999ZM562.998 262.777H546.784V163.833C546.784 161.815 545.93 159.878 544.41 158.451C542.89 157.024 540.827 156.222 538.677 156.222H360.321C357.824 156.222 355.468 157.303 353.933 159.148C352.399 160.996 351.856 163.405 352.46 165.678L374.255 247.555H358.547L343.86 192.433C342.963 189.045 339.72 186.667 335.999 186.667C332.279 186.667 329.036 189.045 328.138 192.433L313.451 247.555H297.744L319.538 165.678C320.143 163.405 319.6 160.996 318.065 159.148C316.531 157.303 314.175 156.222 311.677 156.222H133.321C131.171 156.222 129.108 157.024 127.588 158.451C126.068 159.878 125.214 161.815 125.214 163.833V262.777H109V141H316.43L330.271 153.994H330.267C331.787 155.421 333.85 156.223 336 156.223C338.15 156.223 340.213 155.421 341.733 153.994L355.57 141H459.285H563L562.998 262.777Z" fill="#05526A"/>
</svg>


        {products[0]?.section.toUpperCase()}
      </h2>
      <div className="rowsCard">
        {products?.map((e) => (
          <Card producto={e} />
        ))}
      </div>
    </div>
  );
};

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}

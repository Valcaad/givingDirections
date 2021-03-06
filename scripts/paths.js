export function getPaths(map) {
    switch(map){
        case 'newyork':
            return [
                {nodes: ["1", "2"], d: "M 51.182 212.835 L 50.032 363.383"},
                {nodes: ["1", "7"], d: "M 135.075 215.133 L 51.181 212.835"},
                {nodes: ["1", "6"], d: "M 116.687 363.384 L 52.331 241.565 L 51.181 212.835"},
                {nodes: ["2", "3"], d: "M 50.033 363.383 L 50.032 388.666"},
                {nodes: ["2", "6"], d: "M 50.033 363.383 L 115.538 364.532"},
                {nodes: ["3", "4"], d: "M 50.033 387.517 L 48.883 539.214"},
                {nodes: ["3", "9"], d: "M 50.033 387.517 L 133.925 389.815"},
                {nodes: ["4", "5"], d: "M 50.033 535.767 L 48.883 592.078"},
                {nodes: ["4", "10"], d: "M 48.884 538.065 L 133.925 539.214"},
                {nodes: ["5", "11"], d: "M 48.884 590.929 L 131.627 592.078"},
                {nodes: ["6", "8"], d: "M 115.539 364.532 L 135.074 364.532"},
                {nodes: ["6", "9"], d: "M 115.539 364.532 L 132.776 389.815"},
                {nodes: ["7", "8"], d: "M 136.225 215.133 L 135.074 365.681"},
                {nodes: ["7", "12"], d: "M 136.225 215.133 L 220.116 217.431"},
                {nodes: ["8", "9"], d: "M 133.927 388.666 L 133.924 363.382"},
                {nodes: ["8", "13"], d: "M 216.671 365.682 L 133.924 364.531"},
                {nodes: ["9", "10"], d: "M 132.778 538.065 L 135.073 389.814"},
                {nodes: ["9", "14"], d: "M 217.82 390.965 L 135.073 389.814"},
                {nodes: ["9", "15"], d: "M 217.819 540.363 L 175.298 476.007 L 135.076 402.457 L 135.073 389.814"},
                {nodes: ["10", "11"], d: "M 132.776 539.214 L 131.627 590.929"},
                {nodes: ["10", "15"], d: "M 132.776 539.214 L 217.819 539.214"},
                {nodes: ["11", "16"], d: "M 131.627 592.078 L 217.819 592.078"},
                {nodes: ["12", "13"], d: "M 220.117 217.431 L 218.968 365.681"},
                {nodes: ["12", "18"], d: "M 219.832 217.152 C 228.653 215.755 236.163 222.479 237.648 234.706 C 238.473 241.502 244.936 248.663 257.036 256.19"},
                {nodes: ["13", "14"], d: "M 218.784 365.444 L 218.784 391.12"},
                {nodes: ["13", "20"], d: "M 218.784 365.444 L 233.718 378.02"},
                {nodes: ["14", "15"], d: "M 217.805 539.745 L 218.522 391.644"},
                {nodes: ["14", "20"], d: "M 218.436 391.388 L 233.125 378.658"},
                {nodes: ["15", "16"], d: "M 218.436 539.25 L 217.457 594.086"},
                {nodes: ["15", "23"], d: "M 218.436 539.25 L 301.67 541.208"},
                {nodes: ["16", "24"], d: "M 217.457 592.128 L 299.712 593.107"},
                {nodes: ["17", "19"], d: "M 264.46 44.962 C 271.967 67.157 269.029 87.395 255.647 105.673 C 239.122 128.244 233.238 147.034 255.166 175.249 L 271.014 212.229 C 277.287 219.933 276.407 230.279 270.353 243.266"},
                {nodes: ["17", "25"], d: "M 264.08 44.976 L 306.343 39.363 L 368.086 42.665 L 401.434 35.401"},
                {nodes: ["18", "19"], d: "M 269.481 244.467 L 262.998 257.169 L 256.837 257.349"},
                {nodes: ["18", "21"], d: "M 261.87 380.309 C 268.307 360.998 256.607 309.827 256.607 309.827 L 256.837 257.349"},
                {nodes: ["19", "26"], d: "M 269.792 244.142 C 269.792 244.142 283.657 236.22 320.793 250.579 C 320.793 250.579 338.124 247.113 340.599 237.705 C 340.599 237.705 370.803 225.821 377.24 224.336 C 383.677 222.851 404.473 215.423 410.415 211.957"},
                {nodes: ["20", "21"], d: "M 261.87 380.309 L 235.055 377.15"},
                {nodes: ["21", "22"], d: "M 261.375 381.134 C 261.375 381.134 229.189 456.892 240.578 478.184 L 286.627 504.922"},
                {nodes: ["21", "28"], d: "M 261.374 380.639 C 261.374 380.639 274.744 375.193 353.473 398.465"},
                {nodes: ["22", "23"], d: "M 283.161 502.446 C 283.161 502.446 315.841 528.194 301.482 540.573"},
                {nodes: ["22", "28"], d: "M 286.132 503.931 L 321.783 510.368 C 346.376 514.494 356.113 498.155 350.997 461.348 L 353.968 398.464"},
                {nodes: ["23", "24"], d: "M 301.482 542.828 L 299.996 593.333"},
                {nodes: ["23", "31"], d: "M 301.482 542.828 L 381.201 541.837"},
                {nodes: ["24", "32"], d: "M 300.492 594.324 L 381.696 594.323"},
                {nodes: ["25", "26"], d: "M 400.512 36.068 L 414.871 103.409 C 426.26 128.992 425.765 146.982 413.386 157.38 C 404.251 165.053 401.28 176.607 404.473 192.041 L 410.415 211.352"},
                {nodes: ["25", "34"], d: "M 401.007 36.068 C 401.007 36.068 428.736 12.796 477.26 40.03"},
                {nodes: ["26", "27"], d: "M 409.92 210.857 L 433.687 226.207"},
                {nodes: ["27", "28"], d: "M 355.453 398.684 C 365.851 368.48 400.512 376.898 400.512 376.898 C 429.231 371.946 427.251 347.188 421.804 323.916 C 416.357 300.644 427.745 284.635 427.745 284.635 L 434.677 226.207"},
                {nodes: ["27", "35"], d: "M 435.172 226.812 L 476.765 214.928"},
                {nodes: ["28", "29"], d: "M 355.453 398.629 L 400.017 401.6"},
                {nodes: ["29", "30"], d: "M 401.502 401.38 C 401.502 401.38 417.347 401.38 427.745 394.448 C 427.745 394.448 429.232 387.02 445.076 384.545"},
                {nodes: ["29", "33"], d: "M 401.502 401.38 C 401.502 401.38 405.464 445.449 455.969 479.119 C 455.969 479.119 465.378 478.128 454.979 542.498"},
                {nodes: ["30", "36"], d: "M 437.648 386.691 L 476.765 368.37"},
                {nodes: ["30", "37"], d: "M 437.648 386.691 L 476.765 393.623"},
                {nodes: ["31", "32"], d: "M 380.706 542.664 L 382.191 593.664"},
                {nodes: ["31", "33"], d: "M 380.706 542.664 L 452.998 543.159"},
                {nodes: ["32", "41"], d: "M 382.191 594.655 L 476.765 596.14"},
                {nodes: ["33", "40"], d: "M 454.483 543.654 L 477.755 544.149"},
                {nodes: ["34", "35"], d: "M 478.101 216.111 L 478.377 40.714"},
                {nodes: ["34", "42"], d: "M 573.816 40.841 L 478.377 40.714"},
                {nodes: ["35", "36"], d: "M 478.52 216.458 L 477.696 368.805"},
                {nodes: ["35", "43"], d: "M 478.52 216.458 L 572.992 218.374"},
                {nodes: ["36", "37"], d: "M 477.839 394.117 L 477.696 368.805"},
                {nodes: ["36", "44"], d: "M 573.135 369.612 L 477.696 368.805"},
                {nodes: ["37", "38"], d: "M 477.839 466.95 L 477.696 394.671"},
                {nodes: ["37", "45"], d: "M 571.774 396.159 L 477.696 394.671"},
                {nodes: ["38", "39"], d: "M 477.839 493.497 L 477.696 466.824"},
                {nodes: ["38", "46"], d: "M 572.454 467.631 L 477.696 466.824"},
                {nodes: ["39", "40"], d: "M 477.839 542.506 L 477.696 493.371"},
                {nodes: ["39", "47"], d: "M 571.093 495.539 L 477.696 493.371"},
                {nodes: ["40", "41"], d: "M 477.839 596.28 L 477.696 543.061"},
                {nodes: ["40", "48"], d: "M 571.774 545.229 L 477.696 543.061"},
                {nodes: ["41", "49"], d: "M 571.774 596.28 L 477.696 595.474"},
                {nodes: ["42", "43"], d: "M 572.454 219.862 L 573.673 40.715"},
                {nodes: ["42", "50"], d: "M 671.154 40.842 L 573.673 40.715"},
                {nodes: ["43", "44"], d: "M 572.455 369.613 L 572.992 219.055"},
                {nodes: ["43", "51"], d: "M 668.432 221.904 L 572.992 219.055"},
                {nodes: ["44", "45"], d: "M 572.456 396.159 L 571.631 370.167"},
                {nodes: ["44", "52"], d: "M 669.113 370.974 L 571.631 370.167"},
                {nodes: ["45", "46"], d: "M 572.456 396.159 L 571.631 468.867"},
                {nodes: ["45", "53"], d: "M 572.456 396.159 L 666.927 397.395"},
                {nodes: ["46", "47"], d: "M 571.095 468.312 L 571.631 496.094"},
                {nodes: ["46", "54"], d: "M 571.095 468.312 L 667.608 468.867"},
                {nodes: ["47", "48"], d: "M 571.776 495.539 L 570.951 544.423"},
                {nodes: ["47", "55"], d: "M 571.776 495.539 L 666.928 496.775"},
                {nodes: ["48", "49"], d: "M 571.776 545.229 L 571.632 595.474"},
                {nodes: ["48", "56"], d: "M 571.776 545.229 L 665.567 546.465"},
                {nodes: ["49", "57"], d: "M 571.776 595.6 L 666.248 596.836"},
                {nodes: ["50", "51"], d: "M 671.176 40.182 L 670.495 221.244"},
                {nodes: ["51", "52"], d: "M 668.453 371.676 L 670.495 221.244"},
                {nodes: ["52", "53"], d: "M 668.453 371.676 L 668.453 398.222"},
                {nodes: ["53", "54"], d: "M 667.772 470.375 L 668.453 398.222"},
                {nodes: ["54", "55"], d: "M 667.772 470.375 L 667.092 496.241"},
                {nodes: ["55", "56"], d: "M 666.411 546.612 L 667.092 496.241"},
                {nodes: ["56", "57"], d: "M 666.411 546.612 L 666.411 598.344"},
            ]
        case 'london':
            return [
                {nodes: ["1", "2"], d: "M 48.466 241.922 C 48.466 241.922 56.442 242.536 58.896 251.125 L 86.503 277.505"},
                {nodes: ["1", "6"], d: "M 49.08 240.695 L 130.675 219.836"},
                {nodes: ["2", "3"], d: "M 85.89 277.505 L 107.362 300.205 C 107.362 300.205 111.656 307.566 118.405 306.953"},
                {nodes: ["2", "7"], d: "M 85.89 277.641 L 142.945 265.985"},
                {nodes: ["3", "4"], d: "M 117.791 306.476 C 117.791 306.476 109.816 309.543 100.613 311.997 C 91.41 314.451 34.969 321.813 34.969 321.813"},
                {nodes: ["3", "8"], d: "M 116.564 306.476 L 152.147 302.181"},
                {nodes: ["3", "9"], d: "M 115.951 306.544 C 115.951 306.544 125.767 302.863 126.994 316.973 C 128.221 331.083 132.515 345.194 149.693 367.894 C 166.871 390.594 169.325 393.047 164.417 412.679"},
                {nodes: ["4", "5"], d: "M 34.969 322.29 L 34.356 352.965 L 46.012 364.622 L 21.472 423.517 L 25.153 486.094 C 25.153 486.094 33.129 489.162 53.374 478.732"},
                {nodes: ["5", "9"], d: "M 53.988 478.732 C 53.988 478.732 107.975 440.082 111.656 423.517 C 111.656 423.517 168.098 417.996 162.577 411.861"},
                {nodes: ["6", "7"], d: "M 131.902 219.768 L 142.945 265.167"},
                {nodes: ["6", "18"], d: "M 131.288 219.973 C 131.288 219.973 182.822 200.341 210.429 199.727 C 238.036 199.113 261.963 186.844 290.184 173.347 C 290.184 173.347 345.399 132.242 355.828 128.562"},
                {nodes: ["7", "8"], d: "M 144.172 265.372 L 152.147 300.954"},
                {nodes: ["7", "16"], d: "M 143.558 265.372 L 251.534 229.175 L 287.73 210.77"},
                {nodes: ["8", "11"], d: "M 152.761 301.568 L 229.448 291.752"},
                {nodes: ["9", "10"], d: "M 163.804 412.134 C 163.804 412.134 159.509 414.588 168.712 428.085 C 168.712 428.085 180.368 440.355 195.706 459.986"},
                {nodes: ["9", "12"], d: "M 163.19 412.747 C 163.19 412.747 163.804 409.066 177.301 404.158 C 190.798 399.25 231.288 369.189 231.288 369.189 L 275.46 343.422"},
                {nodes: ["9", "24"], d: "M 161.963 413.974 C 161.963 413.974 177.914 414.588 193.865 419.496 C 209.816 424.404 239.264 427.471 270.552 402.318 C 270.552 402.318 288.957 395.569 371.166 327.471"},
                {nodes: ["10", "13"], d: "M 195.706 460.804 L 222.699 443.013 L 303.067 433.197 L 339.264 435.038"},
                {nodes: ["10", "15"], d: "M 195.706 460.804 L 203.067 477.982 L 226.38 480.436 L 231.288 501.295 L 307.975 561.077"},
                {nodes: ["11", "12"], d: "M 228.834 292.774 L 250.92 340.014 L 274.847 343.695"},
                {nodes: ["11", "17"], d: "M 230.061 292.161 L 326.994 276.21"},
                {nodes: ["12", "17"], d: "M 275.46 343.695 C 275.46 343.695 325.767 300.75 326.38 276.21"},
                {nodes: ["13", "14"], d: "M 340.491 435.787 C 340.491 435.787 332.515 468.303 333.129 498.978"},
                {nodes: ["13", "25"], d: "M 340.491 435.787 C 340.491 435.787 341.718 368.916 380.368 344.376"},
                {nodes: ["13", "26"], d: "M 339.264 435.787 L 388.957 441.922 C 388.957 441.922 423.926 429.039 432.515 418.609"},
                {nodes: ["14", "15"], d: "M 333.742 500.205 C 333.742 500.205 329.448 506.953 323.926 535.787 C 323.926 535.787 326.381 542.536 309.202 560.941"},
                {nodes: ["14", "27"], d: "M 332.515 500.205 L 357.669 504.499 C 357.669 504.499 430.061 476.278 445.399 471.984 C 460.737 467.69 465.031 457.26 465.031 457.26"},
                {nodes: ["15", "29"], d: "M 308.589 560.327 L 335.583 580.573 C 335.583 580.573 354.601 598.364 369.939 586.094 L 417.178 573.824 C 425.021 568.836 434.969 552.352 434.969 552.352 C 434.969 552.352 454.601 540.082 469.325 538.241"},
                {nodes: ["16", "17"], d: "M 287.117 211.384 C 287.117 211.384 330.675 264.758 326.38 276.414"},
                {nodes: ["16", "20"], d: "M 287.117 211.452 L 348.466 175.869 C 348.466 175.869 367.485 172.188 376.687 166.053"},
                {nodes: ["17", "22"], d: "M 326.38 275.869 L 369.325 268.507"},
                {nodes: ["18", "19"], d: "M 357.055 129.243 L 371.779 151.943"},
                {nodes: ["18", "38"], d: "M 355.828 128.63 C 355.828 128.63 372.393 124.949 409.202 125.562 C 409.202 125.562 457.668 111.452 468.712 127.403 L 562.577 159.918 L 574.847 174.642"},
                {nodes: ["19", "20"], d: "M 372.393 151.943 L 377.914 166.667"},
                {nodes: ["19", "39"], d: "M 373.006 151.329 L 392.638 144.581 C 392.638 144.581 412.27 178.937 439.877 203.476 C 439.877 203.476 461.351 222.495 456.442 235.992 L 465.031 268.507"},
                {nodes: ["20", "21"], d: "M 377.301 165.644 L 404.294 208.589 L 425.767 258.282"},
                {nodes: ["21", "22"], d: "M 425.153 259.509 L 369.939 269.325"},
                {nodes: ["21", "39"], d: "M 425.153 259.509 C 425.153 259.509 430.675 257.055 446.012 263.804 C 461.349 270.553 463.804 268.098 463.804 268.098"},
                {nodes: ["22", "23"], d: "M 369.939 268.712 L 382.209 307.362"},
                {nodes: ["23", "24"], d: "M 381.595 307.362 C 381.595 307.362 380.982 320.245 371.166 326.994"},
                {nodes: ["23", "40"], d: "M 381.595 307.975 L 402.454 313.497 C 402.454 313.497 420.245 301.227 431.902 299.387 L 469.325 302.454"},
                {nodes: ["24", "25"], d: "M 371.166 327.607 L 380.982 344.172"},
                {nodes: ["25", "26"], d: "M 380.982 344.376 C 380.982 344.376 406.748 391.616 431.902 416.769"},
                {nodes: ["25", "41"], d: "M 380.982 344.376 C 380.982 344.376 389.571 330.266 429.448 329.652 C 469.325 329.038 471.779 329.652 471.779 329.652"},
                {nodes: ["26", "27"], d: "M 432.515 418.405 L 465.644 457.669"},
                {nodes: ["27", "28"], d: "M 465.644 458.214 L 492.025 491.343"},
                {nodes: ["27", "41"], d: "M 465.644 457.601 L 471.779 329.38"},
                {nodes: ["28", "29"], d: "M 492.638 491.479 C 492.638 491.479 487.117 488.412 490.798 511.111 C 490.798 511.111 492.025 521.54 470.552 538.105"},
                {nodes: ["28", "30"], d: "M 493.252 491.479 L 534.969 504.363 L 588.957 502.522"},
                {nodes: ["29", "30"], d: "M 469.325 537.355 L 546.626 620.177 L 598.773 602.386 L 645.399 571.098 L 590.184 502.386"},
                {nodes: ["30", "31"], d: "M 589.571 502.25 L 604.294 484.458 L 625.767 468.507 C 625.767 468.507 648.466 398.569 647.853 401.636 C 647.24 404.703 663.19 356.851 663.19 356.851"},
                {nodes: ["30", "32"], d: "M 589.571 502.25 L 540.491 439.059 L 571.166 379.55 L 579.755 343.354"},
                {nodes: ["31", "32"], d: "M 663.804 356.237 L 611.656 350.102 L 580.982 342.74"},
                {nodes: ["31", "35"], d: "M 663.19 356.374 C 663.19 356.374 672.393 322.018 663.804 296.864"},
                {nodes: ["31", "36"], d: "M 663.804 356.919 C 663.804 356.919 673.62 356.305 681.595 359.986 C 683.759 363.232 702.856 352.921 701.84 351.397 C 701.84 351.397 703.681 337.901 692.025 321.336 C 680.369 304.771 675.46 287.594 674.847 287.594"},
                {nodes: ["32", "33"], d: "M 579.755 342.672 L 588.957 322.427"},
                {nodes: ["32", "41"], d: "M 580.368 342.672 L 516.564 330.402 L 471.779 328.562"},
                {nodes: ["33", "34"], d: "M 589.571 323.313 L 570.552 315.951"},
                {nodes: ["33", "35"], d: "M 589.571 322.086 C 589.571 322.086 610.429 333.742 625.767 319.018 L 661.963 295.706"},
                {nodes: ["33", "37"], d: "M 588.957 322.699 L 617.791 269.325 L 640.491 212.27"},
                {nodes: ["34", "38"], d: "M 570.552 315.951 C 570.552 315.951 557.055 303.068 569.325 267.485 C 581.595 231.902 581.595 233.742 579.141 205.522 L 574.847 174.233"},
                {nodes: ["34", "39"], d: "M 570.552 316.973 C 570.552 316.973 531.288 302.863 504.908 288.753 C 478.528 274.643 486.503 275.869 465.031 268.507"},
                {nodes: ["35", "36"], d: "M 663.19 296.728 L 674.233 289.366"},
                {nodes: ["36", "37"], d: "M 674.233 288.684 L 663.804 263.531 L 657.055 258.623 L 657.669 229.789 L 641.104 212.611"},
                {nodes: ["37", "38"], d: "M 641.104 212.815 C 641.104 212.815 611.656 182.754 591.411 179.686 L 574.234 175.392"},
                {nodes: ["39", "40"], d: "M 465.031 268.644 L 468.712 301.159"},
                {nodes: ["40", "41"], d: "M 468.712 301.363 L 471.779 328.357"}
            ];
        case 'paris':
            return [
                {nodes: ["1", "2"], d: "M 31.464 119.677 L 41.445 197.026"},
                {nodes: ["1", "4"], d: "M 31.594 119.828 L 1.855 101.37 L 35.183 53.172 C 33.03 53.352 101.426 89.028 173.624 100.344"},
                {nodes: ["1", "5"], d: "M 31.464 119.677 L 133.266 176.067 C 132.601 166.752 149.567 164.756 151.23 175.069 C 154.18 177.656 150.133 191.851 141.25 189.041 C 136.455 187.524 132.766 187.045 132.766 176.566"},
                {nodes: ["2", "3"], d: "M 41.944 197.248 L 62.903 354.441 C 62.903 354.441 62.404 361.926 68.891 359.93"},
                {nodes: ["2", "5"], d: "M 41.444 197.526 L 132.767 180.059 C 132.767 180.059 131.603 173.736 138.754 169.079 C 156.206 168.091 151.379 179.856 151.23 179.559 C 150.648 184.41 146.926 197.115 133.266 182.556"},
                {nodes: ["3", "5"], d: "M 67.892 361.206 L 138.256 189.041 C 138.256 189.041 132.601 186.711 133.764 180.557 C 133.701 167.494 146.346 168.651 146.24 168.581 C 146.24 168.581 162.208 183.053 140.252 189.043"},
                {nodes: ["3", "6"], d: "M 66.895 360.429 C 66.895 360.429 72.384 363.922 81.866 357.435 L 129.273 337.474"},
                {nodes: ["4", "5"], d: "M 173.187 100.215 L 145.243 167.584 C 145.243 167.584 155.555 171.243 150.731 180.059 C 149.689 187.636 145.143 189.855 136.26 187.045 C 131.465 185.528 131.768 168.082 143.745 168.083"},
                {nodes: ["4", "44"], d: "M 174.185 100.714 L 312.915 56.8"},
                {nodes: ["4", "45"], d: "M 174.185 100.714 L 216.104 1.408 L 346.349 44.823"},
                {nodes: ["5", "6"], d: "M 129.273 336.975 L 150.731 281.362 L 145.243 189.54 C 145.243 189.54 131.603 189.205 134.762 176.564 C 132.642 168.048 145.242 168.081 145.242 168.081 C 153.643 172.932 154.91 180.648 145.741 189.044"},
                {nodes: ["5", "14"], d: "M 201.132 211.997 L 150.732 183.552 C 150.732 183.552 148.07 192.7 140.251 188.542 C 128.71 187.456 135.867 173.641 135.761 173.571 C 135.761 173.571 149.732 156.604 151.23 182.555"},
                {nodes: ["5", "42"], d: "M 347.347 150.617 L 150.233 176.067 C 150.233 176.067 156.054 185.714 141.748 188.542 C 130.207 187.456 133.871 175.637 133.765 175.567 C 133.765 175.567 142.247 162.592 150.232 175.069"},
                {nodes: ["6", "7"], d: "M 129.273 337.862 L 111.308 372.794 L 106.817 406.728"},
                {nodes: ["6", "13"], d: "M 129.273 337.862 L 191.651 329.379 L 208.618 344.849"},
                {nodes: ["7", "8"], d: "M 106.817 404.898 C 106.817 404.898 103.324 411.385 112.805 419.869 L 126.778 435.837"},
                {nodes: ["7", "10"], d: "M 106.318 409.389 L 61.406 479.752 L 81.367 511.19"},
                {nodes: ["7", "13"], d: "M 106.817 407.892 C 106.817 407.892 138.755 348.508 207.62 344.017"},
                {nodes: ["8", "9"], d: "M 126.778 436.336 L 103.324 462.785"},
                {nodes: ["8", "11"], d: "M 126.279 436.336 L 148.735 409.888"},
                {nodes: ["9", "10"], d: "M 102.825 463.783 C 102.825 463.783 97.834 467.276 82.365 514.683"},
                {nodes: ["9", "24"], d: "M 103.324 463.062 L 200.135 572.349"},
                {nodes: ["10", "25"], d: "M 82.365 513.963 L 119.792 574.844 L 171.69 603.288"},
                {nodes: ["11", "12"], d: "M 149.234 410.443 C 149.234 410.443 173.686 373.016 209.616 375.012"},
                {nodes: ["11", "23"], d: "M 149.234 409.944 L 248.54 514.24"},
                {nodes: ["12", "13"], d: "M 210.115 376.01 L 207.62 344.072"},
                {nodes: ["12", "19"], d: "M 210.115 376.01 L 293.951 372.017"},
                {nodes: ["12", "23"], d: "M 210.115 376.01 L 245.546 508.251 L 250.536 514.24"},
                {nodes: ["13", "14"], d: "M 207.121 344.516 L 199.137 211.775"},
                {nodes: ["13", "15"], d: "M 207.121 344.516 L 253.531 294.613 L 290.458 264.672"},
                {nodes: ["13", "18"], d: "M 207.62 345.015 L 292.454 337.03"},
                {nodes: ["14", "15"], d: "M 199.636 210.777 L 290.957 262.675"},
                {nodes: ["15", "16"], d: "M 329.383 283.635 L 290.957 262.675"},
                {nodes: ["15", "18"], d: "M 291.956 336.033 L 290.957 262.675"},
                {nodes: ["16", "17"], d: "M 329.383 283.635 L 324.891 336.032"},
                {nodes: ["16", "38"], d: "M 329.383 283.635 L 397.749 323.057"},
                {nodes: ["16", "42"], d: "M 329.383 283.635 L 351.34 226.246 L 347.846 151.892"},
                {nodes: ["17", "18"], d: "M 324.891 336.531 L 292.454 337.03"},
                {nodes: ["17", "20"], d: "M 324.891 336.531 L 322.895 369.966"},
                {nodes: ["17", "38"], d: "M 324.891 336.531 L 370.801 336.531 L 390.763 319.564 L 398.747 323.058"},
                {nodes: ["18", "19"], d: "M 292.953 337.03 L 293.952 370.964"},
                {nodes: ["19", "20"], d: "M 293.952 372.461 L 322.396 370.465"},
                {nodes: ["19", "21"], d: "M 293.952 372.461 L 290.458 396.913 L 321.398 400.906"},
                {nodes: ["20", "21"], d: "M 322.895 369.966 L 320.899 400.906"},
                {nodes: ["20", "37"], d: "M 322.895 369.966 C 319.871 367.446 365.974 364.114 377.788 373.959"},
                {nodes: ["21", "22"], d: "M 320.899 401.127 L 317.905 441.548"},
                {nodes: ["21", "36"], d: "M 320.899 401.127 L 383.776 406.117 L 406.232 420.589"},
                {nodes: ["22", "23"], d: "M 318.903 441.77 L 301.437 445.263 L 299.94 452.749 L 252.532 509.638 C 252.532 509.638 247.542 512.632 250.536 516.125"},
                {nodes: ["22", "30"], d: "M 318.903 441.271 L 340.86 452.25 L 338.365 523.111 C 338.365 523.111 335.371 527.104 334.872 526.605"},
                {nodes: ["23", "24"], d: "M 248.54 513.63 C 248.54 513.63 252.532 516.624 245.047 522.113 L 200.634 572.515"},
                {nodes: ["23", "28"], d: "M 249.039 514.628 L 275.488 545.568"},
                {nodes: ["23", "29"], d: "M 248.54 514.628 C 248.54 514.628 252.033 519.119 264.509 519.618 L 295.449 523.611"},
                {nodes: ["24", "25"], d: "M 200.135 572.182 L 172.189 604.12"},
                {nodes: ["24", "27"], d: "M 200.135 572.182 L 229.078 603.621"},
                {nodes: ["25", "26"], d: "M 171.191 603.621 L 210.614 625.578"},
                {nodes: ["26", "27"], d: "M 229.078 603.621 L 210.614 625.578"},
                {nodes: ["26", "32"], d: "M 211.909 626.937 L 301.093 674.223 L 354.364 645.492"},
                {nodes: ["27", "28"], d: "M 228.579 602.623 L 275.987 546.732"},
                {nodes: ["28", "29"], d: "M 295.448 524.276 L 275.987 546.732"},
                {nodes: ["29", "30"], d: "M 295.448 524.276 L 334.872 525.274"},
                {nodes: ["30", "31"], d: "M 333.374 557.711 L 334.872 525.274"},
                {nodes: ["31", "32"], d: "M 333.375 557.544 C 333.375 557.544 324.891 571.517 353.336 645.373"},
                {nodes: ["31", "34"], d: "M 333.375 557.544 L 453.141 564.53"},
                {nodes: ["32", "33"], d: "M 354.334 644.874 L 424.696 697.271 L 463.121 629.404"},
                {nodes: ["32", "34"], d: "M 354.334 645.373 L 453.141 564.53"},
                {nodes: ["33", "34"], d: "M 464.619 630.402 L 453.141 564.53"},
                {nodes: ["33", "66"], d: "M 464.119 628.905 C 464.119 628.905 461.624 639.883 479.589 628.905 C 497.554 617.927 568.416 582.994 588.377 635.392"},
                {nodes: ["33", "69"], d: "M 464.618 632.398 C 464.618 632.398 464.618 620.421 472.603 610.94 L 518.014 527.104"},
                {nodes: ["34", "35"], d: "M 453.64 564.53 L 442.661 485.684"},
                {nodes: ["35", "36"], d: "M 443.16 486.682 L 405.733 419.813"},
                {nodes: ["35", "56"], d: "M 443.659 486.682 L 457.632 475.704 L 465.616 459.236"},
                {nodes: ["35", "69"], d: "M 444.158 485.185 L 517.515 526.605"},
                {nodes: ["36", "37"], d: "M 406.232 420.811 L 393.757 398.854 C 393.757 398.854 389.764 377.895 378.287 375.4"},
                {nodes: ["36", "56"], d: "M 405.733 420.811 L 465.117 458.238"},
                {nodes: ["37", "38"], d: "M 384.275 378.893 C 384.275 378.893 376.79 372.406 384.275 356.936 L 399.246 323.002"},
                {nodes: ["37", "55"], d: "M 383.277 376.897 L 480.088 426.3"},
                {nodes: ["38", "39"], d: "M 398.248 323.501 L 406.731 304.039"},
                {nodes: ["39", "40"], d: "M 426.692 255.634 L 406.731 304.039"},
                {nodes: ["39", "54"], d: "M 506.037 356.437 L 406.731 304.039"},
                {nodes: ["40", "41"], d: "M 427.191 255.634 C 427.191 255.634 420.205 251.641 415.714 235.673 L 387.768 161.318"},
                {nodes: ["40", "52"], d: "M 426.692 255.634 C 426.692 255.634 435.675 258.129 447.152 250.643 L 507.535 231.68"},
                {nodes: ["41", "42"], d: "M 388.267 161.318 L 347.347 150.838"},
                {nodes: ["41", "43"], d: "M 388.267 161.318 L 347.347 104.429"},
                {nodes: ["41", "46"], d: "M 388.267 161.318 L 501.047 133.872"},
                {nodes: ["42", "43"], d: "M 347.846 150.838 L 346.848 104.928"},
                {nodes: ["43", "44"], d: "M 314.411 56.522 L 346.848 104.928"},
                {nodes: ["44", "45"], d: "M 314.411 56.522 L 349.343 45.544"},
                {nodes: ["45", "46"], d: "M 501.047 133.372 L 349.343 45.544"},
                {nodes: ["46", "47"], d: "M 501.546 132.374 L 606.342 146.347"},
                {nodes: ["47", "49"], d: "M 608.837 145.848 L 593.367 155.329 L 583.885 210.721"},
                {nodes: ["47", "50"], d: "M 606.841 146.846 L 626.802 138.862 L 613.827 219.704"},
                {nodes: ["49", "50"], d: "M 583.885 211.22 L 614.825 220.203"},
                {nodes: ["49", "52"], d: "M 583.885 211.22 L 509.531 232.679"},
                {nodes: ["50", "51"], d: "M 613.827 219.704 L 619.815 276.094"},
                {nodes: ["51", "52"], d: "M 509.531 230.682 L 511.527 241.162 L 619.815 276.094"},
                {nodes: ["51", "59"], d: "M 620.314 277.036 L 601.85 359.875"},
                {nodes: ["51", "60"], d: "M 620.314 277.036 L 705.647 309.972 L 694.17 344.904"},
                {nodes: ["52", "53"], d: "M 509.032 231.126 L 540.969 363.368 L 537.476 371.851"},
                {nodes: ["53", "54"], d: "M 537.476 372.35 L 505.538 356.381"},
                {nodes: ["53", "59"], d: "M 537.476 372.35 L 592.867 402.291 L 601.85 359.875"},
                {nodes: ["53", "61"], d: "M 537.975 372.018 L 662.731 441.382"},
                {nodes: ["54", "55"], d: "M 505.538 356.049 L 479.589 425.912"},
                {nodes: ["55", "56"], d: "M 465.616 457.85 L 479.589 425.912"},
                {nodes: ["55", "58"], d: "M 537.975 457.351 L 479.589 426.91"},
                {nodes: ["56", "57"], d: "M 525.499 496.774 L 466.115 458.848"},
                {nodes: ["57", "58"], d: "M 525.499 496.774 L 537.975 456.852"},
                {nodes: ["57", "69"], d: "M 525.499 496.774 L 518.014 527.215"},
                {nodes: ["58", "62"], d: "M 537.476 456.353 L 560.432 460.845 C 560.432 460.845 607.34 515.903 628.798 525.385"},
                {nodes: ["59", "60"], d: "M 601.351 359.763 L 619.815 365.752 C 619.815 365.752 631.792 353.276 657.741 360.762 L 694.669 343.795"},
                {nodes: ["59", "61"], d: "M 602.349 359.264 L 592.868 402.68 L 662.232 441.105"},
                {nodes: ["60", "61"], d: "M 694.669 342.797 L 662.731 441.105"},
                {nodes: ["61", "62"], d: "M 663.231 441.604 C 663.231 441.604 653.749 476.036 628.798 523.444"},
                {nodes: ["61", "63"], d: "M 662.232 441.604 L 679.698 451.085 C 679.698 451.085 673.71 459.07 649.757 539.413"},
                {nodes: ["62", "63"], d: "M 628.798 524.442 L 649.258 539.912"},
                {nodes: ["62", "68"], d: "M 628.798 524.442 L 615.823 565.362"},
                {nodes: ["63", "64"], d: "M 650.256 539.413 L 638.279 577.339"},
                {nodes: ["64", "65"], d: "M 638.778 577.838 L 632.291 599.296"},
                {nodes: ["64", "68"], d: "M 638.778 577.838 L 615.324 565.861"},
                {nodes: ["65", "66"], d: "M 632.79 598.353 L 603.846 691.172 L 589.874 639.273"},
                {nodes: ["65", "67"], d: "M 632.79 599.351 L 607.839 586.377"},
                {nodes: ["66", "67"], d: "M 589.874 639.273 L 607.839 587.375"},
                {nodes: ["67", "68"], d: "M 615.823 565.916 L 607.839 586.377"},
                {nodes: ["68", "69"], d: "M 615.823 565.916 L 517.515 526.993"},
            ];
        default:
            return [];    

    }
    
}
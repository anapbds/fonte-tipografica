class L {

    public draw(){
        const casostring: string ='M';
        var ni=0; // parte interna das strings
        var vezes=0; // mais de uma parte interna das strings --B
        switch (casostring){
            case 'A': 
                var np=8;
                var ni=3;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [270,50,0,1],//x_b,y_b,z_b
                                    [310,50,0,1],//x_c,y_c,z_c
                                    [330,250,0,1],//x_d,y_d,z_d
                                    [310,250,0,1],//x_e,y_e,z_e
                                    [305,200,0,1],//x_f,y_f,z_f
                                    [275,200,0,1],//x_g,y_g,z_g
                                    [270,250,0,1],//x_h,y_h,z_h-----externo
                                    [280,180,0,1],//x_i,y_i,z_i---interno
                                    [290,100,0,1],//x_j,y_j,z_j
                                    [300,180,0,1]];//x_k,y_k,z_k
            break;

            case 'B':
                var np=9;
                var ni=4;
                var vezes=2;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [300,50,0,1],//x_c,y_c,z_c
                                    [330,70,0,1],//x_d,y_d,z_d
                                    [330,100,0,1],//x_e,y_e,z_e
                                    [300,150,0,1],//x_f,y_f,z_f
                                    [330,180,0,1],//x_g,y_g,z_g
                                    [330,230,0,1],//x_h,y_h,z_h
                                    [300,250,0,1],//x_i,y_i,z_i --- externo
                                    [270,220,0,1],//x_j,y_j,z_j --- interno
                                    [270,190,0,1],//x_k,y_k,z_k
                                    [300,190,0,1],//x_l,y_l,z_l
                                    [300,220,0,1],//x_m,y_m,z_m 
                                    [270,80,0,1],//x_n,y_n,z_n --- 2 interno
                                    [270,110,0,1],//x_o,y_o,z_o
                                    [300,110,0,1],//x_p,y_p,z_o
                                    [300,80,0,1]];//x_q,y_q,z_q 
                break;
            case 'C': 
                var np=8;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [330,50,0,1],//x_c,y_c,z_c
                                    [330,70,0,1],//x_d,y_d,z_d
                                    [270,70,0,1],//x_e,y_e,z_e
                                    [270,230,0,1],//x_f,y_f,z_f
                                    [330,230,0,1],//x_g,y_g,z_g
                                    [330,250,0,1]];//x_h,y_h,z_h
                break;
            case 'D': 
                var np=6;
                var ni=6;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [310,50,0,1],//x_c,y_c,z_c
                                    [330,70,0,1],//x_d,y_d,z_d
                                    [330,230,0,1],//x_e,y_e,z_e
                                    [310,250,0,1],//x_f,y_f,z_f ---- externo
                                    [280,230,0,1],//x_g,y_g,z_g  --- interno
                                    [280,70,0,1],//x_h,y_h,z_h
                                    [300,70,0,1],//x_i,y_i,z_i
                                    [310,90,0,1],//x_j,y_j,z_j
                                    [310,210,0,1],//x_k,y_k,z_k
                                    [300,230,0,1]];//x_l,y_l,z_l
                break;
            case 'E': 
                var np=12;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [330,50,0,1],//x_c,y_c,z_c
                                    [330,70,0,1],//x_d,y_d,z_d
                                    [270,70,0,1],//x_e,y_e,z_e
                                    [270,130,0,1],//x_f,y_f,z_f
                                    [330,130,0,1],//x_g,y_g,z_g
                                    [330,150,0,1],//x_h,y_h,z_h
                                    [270,150,0,1],//x_i,y_i,z_i
                                    [270,230,0,1],//x_j,y_j,z_j
                                    [330,230,0,1],//x_k,y_k,z_k
                                    [330,250,0,1]];//x_l,y_l,z_l
                break;
            case 'F': 
                var np=10;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [330,50,0,1],//x_c,y_c,z_c
                                    [330,70,0,1],//x_d,y_d,z_d
                                    [270,70,0,1],//x_e,y_e,z_e
                                    [270,130,0,1],//x_f,y_f,z_f
                                    [330,130,0,1],//x_g,y_g,z_g
                                    [330,150,0,1],//x_h,y_h,z_h
                                    [270,150,0,1],//x_i,y_i,z_i
                                    [270,250,0,1]];//x_j,y_j,z_j
                break;
            case 'G': break;
            case 'H':
                var np=12;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [270,50,0,1],//x_c,y_c,z_c
                                    [270,140,0,1],//x_d,y_d,z_d
                                    [310,140,0,1],//x_e,y_e,z_e
                                    [310,50,0,1],//x_f,y_f,z_f
                                    [330,50,0,1],//x_g,y_g,z_g
                                    [330,250,0,1],//x_h,y_h,z_h
                                    [310,250,0,1],//x_i,y_i,z_i
                                    [310,160,0,1],//x_j,y_j,z_j
                                    [270,160,0,1],//x_k,y_k,z_k
                                    [270,250,0,1]];//x_l,y_l,z_l
                break;
            case 'I':
                var np=4;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [270,50,0,1],//x_c,y_c,z_c
                                    [270,250,0,1]];//x_d,y_d,z_d
                break;
            case 'J': 
                var np=10;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [230,230,0,1],//x_b,y_b,z_b
                                    [220,200,0,1],//x_c,y_c,z_c
                                    [250,200,0,1],//x_d,y_d,z_d
                                    [255,220,0,1],//x_e,y_e,z_e
                                    [280,220,0,1],//x_f,y_f,z_f
                                    [280,50,0,1],//x_g,y_g,z_g
                                    [310,50,0,1],//x_h,y_h,z_h
                                    [310,230,0,1],//x_i,y_i,z_i
                                    [290,250,0,1]];//x_j,y_j,z_j
                break;
            case 'K': 
                var np=12;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [270,50,0,1],//x_c,y_c,z_c
                                    [270,150,0,1],//x_d,y_d,z_d
                                    [310,50,0,1],//x_e,y_e,z_e
                                    [330,50,0,1],//x_f,y_f,z_f
                                    [295,150,0,1],//x_g,y_g,z_g
                                    [330,250,0,1],//x_h,y_h,z_h
                                    [310,250,0,1],//x_i,y_i,z_i
                                    [285,180,0,1],//x_j,y_j,z_j
                                    [270,200,0,1],//x_k,y_k,z_k
                                    [270,250,0,1]];//x_l,y_l,z_l
                break;
            case 'L': 
                var np=6;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [270,50,0,1],//x_c,y_c,z_c
                                    [270,230,0,1],//x_d,y_d,z_d
                                    [330,230,0,1],//x_e,y_e,z_e
                                    [330,250,0,1]];//x_f,y_f,z_f
                break;
            case 'M': 
                var np=13;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [280,50,0,1],//x_c,y_c,z_c
                                    [290,180,0,1],//x_d,y_d,z_d
                                    [300,50,0,1],//x_e,y_e,z_e
                                    [330,50,0,1],//x_f,y_f,z_f
                                    [330,250,0,1],//x_g,y_g,z_g
                                    [310,250,0,1],//x_h,y_h,z_h
                                    [310,120,0,1],//x_i,y_i,z_i
                                    [300,250,0,1],//x_j,y_j,z_j
                                    [280,250,0,1],//x_k,y_k,z_k
                                    [270,120,0,1],//x_l,y_l,z_l
                                    [270,250,0,1]];//x_m,y_m,z_m
                break;
            case 'N': 
                var np=10;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,50,0,1],//x_b,y_b,z_b
                                    [270,50,0,1],//x_c,y_c,z_c
                                    [310,180,0,1],//x_d,y_d,z_d
                                    [310,50,0,1],//x_e,y_e,z_e
                                    [330,50,0,1],//x_f,y_f,z_f
                                    [330,250,0,1],//x_g,y_g,z_g
                                    [310,250,0,1],//x_h,y_h,z_h
                                    [270,120,0,1],//x_i,y_i,z_i
                                    [270,250,0,1]];//x_j,y_j,z_j
                break;
            case 'O': 
                var np=8;
                var ni=8;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [230,220,0,1],//x_b,y_b,z_b
                                    [230,80,0,1],//x_c,y_c,z_c
                                    [250,50,0,1],//x_d,y_d,z_d
                                    [290,50,0,1],//x_e,y_e,z_e
                                    [310,80,0,1],//x_f,y_f,z_f
                                    [310,220,0,1],//x_g,y_g,z_g
                                    [290,250,0,1],//x_h,y_h,z_h --- externo
                                    [260,230,0,1],//x_i,y_i,z_i --- interno
                                    [250,210,0,1],//x_j,y_j,z_j
                                    [250,90,0,1],//x_k,y_k,z_k
                                    [260,70,0,1],//x_l,y_l,z_l
                                    [280,70,0,1],//x_m,y_m,z_m
                                    [290,90,0,1],//x_n,y_n,z_n
                                    [290,210,0,1],//x_o,y_o,z_o
                                    [280,230,0,1]];//x_p,y_p,z_p
                break;
            case 'P': break;
            case 'Q': break;
            case 'R': break;
            case 'S': break;
            case 'T': 
                var np=8;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,70,0,1],//x_b,y_b,z_b
                                    [220,70,0,1],//x_c,y_c,z_c
                                    [220,50,0,1],//x_d,y_d,z_d
                                    [300,50,0,1],//x_e,y_e,z_e
                                    [300,70,0,1],//x_f,y_f,z_f
                                    [270,70,0,1],//x_g,y_g,z_g
                                    [270,250,0,1]]//x_h,y_h,z_h
                break;
            case 'U': break;
            case 'V': 
                var np=7;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [230,50,0,1],//x_b,y_b,z_b
                                    [250,50,0,1],//x_c,y_c,z_c
                                    [265,200,0,1],//x_d,y_d,z_d
                                    [280,50,0,1],//x_e,y_e,z_e
                                    [300,50,0,1],//x_f,y_f,z_f
                                    [280,250,0,1]];//x_g,y_g,z_g
                break;
            case 'W':
                var np=13;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                   [230,50,0,1],//x_b,y_b,z_b
                                   [250,50,0,1],//x_c,y_c,z_c
                                   [265,200,0,1],//x_d,y_d,z_d
                                   [280,50,0,1],//x_e,y_e,z_e
                                   [300,50,0,1],//x_f,y_f,z_f
                                   [315,200,0,1],//x_g,y_g,z_g
                                   [330,50,0,1],//x_h,y_h,z_h
                                   [350,50,0,1],//x_i,y_i,z_i
                                   [330,250,0,1],//x_j,y_j,z_j
                                   [300,250,0,1],//x_k,y_k,z_k
                                   [290,150,0,1],//x_l,y_l,z_l
                                   [280,250,0,1]];//x_m,y_m,z_m
                break;
            case 'X':
                var np=12;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [280,150,0,1],//x_b,y_b,z_b
                                    [250,50,0,1],//x_c,y_c,z_c
                                    [270,50,0,1],//x_d,y_d,z_d
                                    [290,110,0,1],//x_e,y_e,z_e
                                    [310,50,0,1],//x_f,y_f,z_f
                                    [330,50,0,1],//x_g,y_g,z_g
                                    [300,150,0,1],//x_h,y_h,z_h
                                    [330,250,0,1],//x_i,y_i,z_i
                                    [310,250,0,1],//x_j,y_j,z_j
                                    [290,190,0,1],//x_k,y_k,z_k
                                    [270,250,0,1]];//x_l,y_l,z_l
                break;
            case 'Y':
                var np=9;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,150,0,1],//x_b,y_b,z_b
                                    [220,50,0,1],//x_c,y_c,z_c
                                    [240,50,0,1],//x_d,y_d,z_d
                                    [260,110,0,1],//x_e,y_e,z_e
                                    [280,50,0,1],//x_f,y_f,z_f
                                    [300,50,0,1],//x_g,y_g,z_g
                                    [270,150,0,1],//x_h,y_h,z_h
                                    [270,250,0,1]];//x_i,y_i,z_i
                break;

            case 'Z': 
                var np=10;
                var matrizPontos= [[250,250,0,1],//x_a,y_a,z_a
                                    [250,230,0,1],//x_b,y_b,z_b
                                    [300,70,0,1],//x_c,y_c,z_c
                                    [250,70,0,1],//x_d,y_d,z_d
                                    [250,50,0,1],//x_e,y_e,z_e
                                    [330,50,0,1],//x_f,y_f,z_f
                                    [330,70,0,1],//x_g,y_g,z_g
                                    [280,230,0,1],//x_h,y_h,z_h
                                    [330,230,0,1],//x_i,y_i,z_i
                                    [330,250,0,1]];//x_j,y_j,z_j
                break;
        }

        var passo;
            for (passo=0; passo<(np-1); passo++){
                line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[passo+1][0],matrizPontos[passo+1][1]);
            }
        line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[0][0],matrizPontos[0][1]);
        if(ni!=0){
            var passo;
            for (passo=np; passo<(np+ni-1); passo++){
                line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[passo+1][0],matrizPontos[passo+1][1]);
            }

            line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[np][0],matrizPontos[np][1]); 
            if(vezes!=0){
                var passo;
                for (passo=np+ni; passo<(np+2*ni-1); passo++){
                    line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[passo+1][0],matrizPontos[passo+1][1]);
                }
                line(matrizPontos[passo][0],matrizPontos[passo][1],matrizPontos[np+ni][0],matrizPontos[np+ni][1]);  
            }
        }
    }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface CategoriaItem {
  title: string;
  description: string;
  description_text: string;
  imageUrl: string;
  price: string;
}

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}
  produto: CategoriaItem | undefined;

  categorias = [
    {
      name: 'X-Vegan',
      items: [
        {
          title: 'X-Salada',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Delicie-se com o nosso X-Salada Vegano: um suculento hambúrguer de planta grelhado, servido em um pão artesanal fofinho. Acompanhado de uma generosa camada de alface fresca, tomate maduro em rodelas, cebola crocante e um delicioso queijo vegano derretido. Tudo finalizado com um toque especial de molho caseiro 100% vegano. Sabor incrível, respeito ao meio ambiente e carinho em cada mordida!',
          imageUrl: '/minih.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Tomate',
          description: 'Pão, Hambúrguer, alface, tomate, queijo e maionese',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/minih.png',
          price: '35,00 R$'
        },
        {
          title: 'X-Frutas',
          description: 'Pão, Hambúrguer, alface, tomate,  e maionese',
          description_text: 'Delicioso hambúrguer vegano',
          imageUrl: '/minih.png',
          price: '35,00 R$'
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productTitle = params.get('productTitle');
      this.produto = this.categorias
        .flatMap((categoria) => categoria.items)
        .find((item) => item.title === productTitle);
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  public svg = [
    { icon: '../../../assets/svg/home.svg', name: 'Todo' },
    { icon: '../../../assets/svg/angular.svg', name: 'Angular' },
    { icon: '../../../assets/svg/express.svg', name: 'Express' },
    { icon: '../../../assets/svg/mongodb.svg', name: 'MongoDB' },
    { icon: '../../../assets/svg/tailwind.svg', name: 'Tailwind' },
    { icon: '../../../assets/svg/javascript.svg', name: 'JavaScript' },
  ];

  images = [
    {
      src: '../../../assets/projectsImg/Calculadora.webp',
      alt: 'Imagen Proyecto',
      title: 'Calculadora - Proyecto 1',
      tecnologies: [
        '../../../assets/svg/html5.svg',
        '../../../assets/svg/css3.svg',
        '../../../assets/svg/javascript.svg',
      ],
      description:
        'Para este proyecto realicé una calculadora básica, a modo de practicar las tecnologías principales del desarrollo web.',
      github: ['https://github.com/R3dgrave/Calculadora-Js'],
      live: 'https://r3dgrave.github.io/Calculadora-Js/',
    },
    {
      src: '../../../assets/projectsImg/ColoresHEXAleatorios.webp',
      alt: 'Imagen Proyecto',
      title: 'Color Hex Aleatorio - Proyecto 2',
      tecnologies: [
        '../../../assets/svg/html5.svg',
        '../../../assets/svg/css3.svg',
        '../../../assets/svg/javascript.svg',
      ],
      description:
        'Proyecto para practicar JavaScript, obtienes el número hex de un color aleatorio al dar click a un botón.',
      github: ['https://github.com/R3dgrave/ColorHexAleatorios-Javascript'],
      live: 'https://r3dgrave.github.io/ColorHexAleatorios-Javascript/',
    },
    {
      src: '../../../assets/projectsImg/TodoList.webp',
      alt: 'Imagen Proyecto',
      title: 'TodoList - Proyecto 3',
      tecnologies: [
        '../../../assets/svg/html5.svg',
        '../../../assets/svg/css3.svg',
        '../../../assets/svg/javascript.svg',
      ],
      description:
        'Proyecto para practicar JavaScript, Es una TodoList, te permite guardar tareas, tacharlas cuando están listas y eliminarlas.',
      github: ['https://github.com/R3dgrave/TodoList-Javascript'],
      live: 'https://r3dgrave.github.io/TodoList-Javascript/',
    },
    {
      src: '../../../assets/projectsImg/Ecommerce.webp',
      alt: 'Imagen Proyecto',
      title: 'Ecommerce Full stack - Proyecto 4',
      tecnologies: [
        '../../../assets/svg/angular.svg',
        '../../../assets/svg/tailwind.svg',
        '../../../assets/svg/express.svg',
        '../../../assets/svg/mongodb.svg',
      ],
      description:
        'Desarrollado con Angular 18, Node.js(Express.JS), MongoDB, Páginas(principal, productos, carrito de compras, lista de deseos, estado mi pedido, perfil). Panel de administrador CRUD(categorías, marcas, productos, pedidos). Adaptado a todos los dispositivos.',
      github: [
        'https://github.com/R3dgrave/E-Commerce-frontend',
        'https://github.com/R3dgrave/E-Commerce-Backend',
      ],
      live: 'https://e-commerce-frontend-teal-one.vercel.app/',
    },
  ];

  filteredImages = [...this.images];
  selectedImage: number | null = null;

  openModal(index: number) {
    this.selectedImage = index;
  }

  closeModal() {
    this.selectedImage = null;
  }

}

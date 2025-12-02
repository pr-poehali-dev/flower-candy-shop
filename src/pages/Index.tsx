import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Нежность',
      category: 'Цветы',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/9110c906-9f00-4f31-bf6b-307e160caf44.jpg',
      description: 'Букет из розовых роз и белых пионов'
    },
    {
      id: 2,
      name: 'Сладкое настроение',
      category: 'Сладости',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/739036e8-d85d-4b5a-bc86-e000e5f6ff31.jpg',
      description: 'Набор французских макарон в подарочной коробке'
    },
    {
      id: 3,
      name: 'Персиковый рассвет',
      category: 'Цветы',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/8ae57732-b32a-4034-a499-21082a675343.jpg',
      description: 'Композиция из роз, лилий и эвкалипта'
    },
    {
      id: 4,
      name: 'Ванильное облако',
      category: 'Сладости',
      price: 1900,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/739036e8-d85d-4b5a-bc86-e000e5f6ff31.jpg',
      description: 'Изысканные пирожные с ванильным кремом'
    },
    {
      id: 5,
      name: 'Романтика',
      category: 'Цветы',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/9110c906-9f00-4f31-bf6b-307e160caf44.jpg',
      description: 'Премиальный букет из садовых роз'
    },
    {
      id: 6,
      name: 'Шоколадное искушение',
      category: 'Сладости',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/739036e8-d85d-4b5a-bc86-e000e5f6ff31.jpg',
      description: 'Бельгийский шоколад ручной работы'
    }
  ];

  const compositions = [
    {
      id: 1,
      name: 'Влюблённость',
      price: 6500,
      items: ['Букет роз', 'Набор макарон', 'Открытка'],
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/9110c906-9f00-4f31-bf6b-307e160caf44.jpg'
    },
    {
      id: 2,
      name: 'Сладкая радость',
      price: 5800,
      items: ['Букет тюльпанов', 'Шоколад', 'Пирожные'],
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/8ae57732-b32a-4034-a499-21082a675343.jpg'
    },
    {
      id: 3,
      name: 'Премиум романтика',
      price: 9500,
      items: ['Премиум букет', 'Французские сладости', 'Подарочная упаковка'],
      image: 'https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/739036e8-d85d-4b5a-bc86-e000e5f6ff31.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">Букет и десерт</h1>
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => setActiveSection('home')} 
                className={`text-sm transition-colors ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('catalog')} 
                className={`text-sm transition-colors ${activeSection === 'catalog' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('compositions')} 
                className={`text-sm transition-colors ${activeSection === 'compositions' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
              >
                Композиции
              </button>
              <button 
                onClick={() => setActiveSection('contacts')} 
                className={`text-sm transition-colors ${activeSection === 'contacts' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'}`}
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      {activeSection === 'home' && (
        <section className="animate-fade-in">
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://cdn.poehali.dev/projects/409e5d0c-b726-4ff0-8953-80b84f8fb32a/files/8ae57732-b32a-4034-a499-21082a675343.jpg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-3xl">
              <h2 className="text-6xl md:text-7xl mb-6 text-foreground animate-scale-in">
                Дарите любовь
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Нежные цветы и изысканные сладости для особенных моментов
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 animate-scale-in" 
                style={{ animationDelay: '0.4s' }}
                onClick={() => setActiveSection('catalog')}
              >
                Смотреть каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20">
            <h3 className="text-4xl text-center mb-12">Популярные товары</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-primary">{product.price} ₽</span>
                    <Button>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-5xl text-center mb-12">Каталог</h2>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="flowers">Цветы</TabsTrigger>
              <TabsTrigger value="sweets">Сладости</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-2"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-semibold text-primary">{product.price} ₽</span>
                      <Button>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="flowers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.filter(p => p.category === 'Цветы').map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-2"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-semibold text-primary">{product.price} ₽</span>
                      <Button>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sweets" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.filter(p => p.category === 'Сладости').map((product, index) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-2"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-2xl font-semibold text-primary">{product.price} ₽</span>
                      <Button>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Заказать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      )}

      {activeSection === 'compositions' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-5xl text-center mb-6">Готовые композиции</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Идеальные подарочные наборы для ваших близких</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {compositions.map((comp, index) => (
              <Card 
                key={comp.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={comp.image} 
                    alt={comp.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl">{comp.name}</CardTitle>
                  <CardDescription className="text-base">
                    <ul className="space-y-2 mt-3">
                      {comp.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-3xl font-semibold text-primary">{comp.price} ₽</span>
                  <Button size="lg">
                    <Icon name="Gift" size={20} className="mr-2" />
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl text-center mb-12">Контакты и доставка</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>г. Санкт-Петербург, Невский проспект, д. 82</p>
                  <p className="text-muted-foreground">Пн-Вс: 8:00 до 22:00</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Связь
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p>+7 (812) 555-20-30</p>
                  <p>hello@bouquet-dessert.ru</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Оформить заказ</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и мы свяжемся с вами для уточнения деталей доставки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Анна" className="text-base" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="text-base" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Адрес доставки</label>
                  <Input placeholder="Улица, дом, квартира" className="text-base" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий к заказу</label>
                  <Textarea placeholder="Укажите желаемую дату и время доставки, дополнительные пожелания..." className="text-base min-h-[120px]" />
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-12 bg-accent/50 rounded-2xl p-8">
              <h3 className="text-3xl mb-6 flex items-center gap-3">
                <Icon name="Truck" className="text-primary" size={32} />
                Информация о доставке
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <span>Доставка в течение 1-3 часов по Санкт-Петербургу</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <span>Бесплатная доставка при заказе от 4000 ₽</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Package" className="text-primary mt-1" size={20} />
                  <span>Отслеживание курьера онлайн через WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Heart" className="text-primary mt-1" size={20} />
                  <span>Гарантия свежести букетов до 10 дней</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-secondary/30 mt-20 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Flower2" className="text-primary" size={28} />
              <span className="text-xl font-semibold">Букет и десерт</span>
            </div>
            <p className="text-muted-foreground">© 2025 Все права защищены</p>
            <div className="flex gap-4">
              <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
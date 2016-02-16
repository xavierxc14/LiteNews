/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

    // Agregamos datos iniciales ya relacionados para posteriormente poder presentarlos
    (function () {

        // Creando las categorias
        var categories = [];
        categories.push({name: 'Mundo'});
        categories.push({name: 'Actualidad'});
        categories.push({name: 'Gente'});
        categories.push({name: 'Tecnología'});

        Category.create(categories).exec(function (err, createdCats) {
            if (err) {
                sails.log.error('Error de categorías :( ', err);
                return;
            }

            sails.log.info('Categorías creadas:  ', createdCats);
            categories = createdCats;

            // Creando las noticias
            var news = [];
            news.push({
                title: 'Cuidado: Usar esta fecha en iOS se puede cargar tu iPhone',
                content: 'Llevamos años haciéndonos eco por aquí de bugs de lo más curiosos en numerosas plataformas, sin embargo, este es posiblemente de los más llamativos y raros que hemos tenido en portada. Según ha descubierto y destapado un usuarios de iOS en un hilo de Reddit, si introduces la fecha 01/01/70 en los Ajustes del iPhone, el terminal se quedará completamente muerto e inutilizable, en modo loop infinito y sin posibilidad tan siquiera de poder restaurarlo -tienes un vídeo tras el salto para comprobarlo con tus propios ojitos.<br>Al parecer el bug afecta a todos aquellos equipos con iOS 8 en adelante que cuenten con procesador de 64-bits (es decir, a partir del iPhone 5s). Aunque la gran mayoría de los modelos probados se quedan totalmente sin vida, existen reportes de usuarios que tras usar el "truco" -hay que tener ganas- han recuperado su iPhone tras unas 5 horas de espera mientras que otros lo han solucionado cambiando la SIM. El resto no tiene más remedio que hacer dos cosas: o bien dirigirse a una tienda Apple y mandar el equipo al servicio técnico o, si no, atreverse con este otro arreglo casero que tienes a continuación, publicado en YouTube por JerryRigEverything, aunque se trata de un proceso delicado que implica abrir el iPhone y desconectar la batería.<br>La gran pregunta que seguro que te ronda por la cabeza es: ¿por qué ocurre esto con esa fecha en concreto? Aunque parezca ilógico o arbitrario, tiene una posible explicación y parte del hecho, como acertadamente indican por aquí y en este otro enlace, de que iOS deriva de OS X y este está basado en Darwin BSD (y por tanto es un SO de tipo UNIX). UNIX cuenta el tiempo desde la citada fecha fatídica, el 01/01/70, y en principio no debería causar problemas, sin embargo, introducir esta fecha en algunas zonas horarias podría suponer un valor inferior a cero (un número negativo, por tanto), provocando este fallo en loop del sistema.Apple aún no se ha pronunciado al respecto, así que solo te recomendamos una cosa para mantenerte seguro y que no te vaya a pasar a ti: ¡no intentes el experimento en casa y quédate en el 2016!',
                author: 'Drita',
                date: new Date(),
                category: categories[3].id
            });
            news.push({
                title: 'Las nuevas pantallas de Japan Display funcionan con las manos mojadas',
                content: 'Japan Display es un importantísimo fabricante de pantallas para dispositivos móviles que presume de ser uno de los principales distribuidores de Apple. Por tanto, cualquier tipo de nueva tecnología que presente fácilmente se convierte rápidamente en un ruidoso rumor sobre un futuro iPhone. Y eso es justo lo que tenemos hoy por delante, el anuncio de las segunda generación de módulos LCD Pixel Eyes, diseñado específicamente para "productos premium".<br>La nueva pantalla estaría fabricada con nuevos materiales que permiten una nueva estructura del sensor, consiguiendo así bordes más delgados, negros más profundos en el color y una sensibilidad capaz de detectar stylus con puntas de 1 milímetro de grosor. Además, funcionaría perfectamente con dedos mojados, por lo que serviría para dar vida a terminales resistentes al agua que además permitieran su uso sin ningún problema. Otra de las novedades es que ofrecería resoluciones más altas, pudiendo además alcanzar hasta las 16 pulgadas de tamaño. <br>Obviamente el anuncio de la nueva pantalla no dice nada de ningún acuerdo con Apple ni nada parecido, a lo que tendríamos que sumar que otros rumores anteriores apuntaban a otro tipo de tecnología para el futuro iPhone: la OLED. De todas formas lo que nos importa de verdad es ver cuanto antes estas nuevas pantallas de Japan Display en funcionamiento, ya que de lo contrario seguiremos arrastrando inútilmente el dedo sobre la pantalla cuando queramos desbloquear el móvil en la piscina.',
                author: 'Ronald Ladines',
                date: new Date(),
                category: categories[3].id
            });
            news.push({
                title: 'Fiscales rastrean supuestas coimas en el fútbol',
                content: '<p id="m12-11-13" class="selectionShareable">Este 5 de marzo se cumplen los 90 días que la <b>Fiscalía General </b>tiene para terminar la investigación sobre el<b> supuesto delito de lavado de activos </b>que pesa sobre tres directivos suspendidos de la Federación Ecuatoriana de Fútbol (FEF).</p> <p id="m65-1-66" class="selectionShareable">En un mensaje publicado en Twitter, la Fiscalía señaló que <b>Luis Chiriboga</b>, Francisco Acosta y Vinicio Luna “<a href="http://www.elcomercio.com/actualidad/fiscalia-dirigentes-fef-lavadodeactivos-fifagate.html" title="Según la Fiscalía, los dirigentes de la FEF serían responsablesdel delito de lavado de activos">serían responsables” de este hecho.</a> <br><br>Para ahondar en las investigaciones, el <b>fiscal Galo Chiriboga </b>recibió ayer, en Guayaquil, a representantes de las fiscalías de Perú, Bolivia, Argentina, Brasil y Paraguay, en lo que se denominó “reunión informativa”. En esos países también se investiga el denominado <b>caso FIFAgate</b>.<br><br>La reunión duró ocho horas y tuvo un receso para almorzar.<br>En el encuentro se analizaron, principalmente, las <b>supuestas coimas</b> que habrían recibido los presidentes de las federaciones de esas naciones por la venta de los derechos de transmisión de torneos oficiales de la <b>Conmebol</b>.<br><br>El objetivo es<b> intercambiar información</b> y elementos procesales que tengan ellos y poder contextualizar la acción, no solo en el campo nacional sino también en el internacional”, detalló Galo Chiriboga, antes del inicio de la cita. <br><br>Como parte de la investigación ecuatoriana se tiene previsto recibir hoy el <b>testimonio</b> (por videoconferencia) de Eugenio Figueredo, expresidente de Conmebol, quien habría reconocido la entrega de sobornos a los presidentes de las federaciones nacionales.<br><br>El año pasado el brasileño José Hawilla, propietario de la empresa Traffic, reconoció ante la justicia de EE.UU. haber entregado sobornos a la cúpula de la Conmebol, para obtener los derechos de transmisión de la Copa América. Según sus palabras, esto lo hizo regularmente desde el año 1991 hasta el 2013.<br><br>Trafic, junto con <b>Full Play</b>, forman parte del grupo Datisa, investigado por la fiscalía norteamericana. Loretta Lynch, fiscal General de Estados Unidos, detalla en uno de sus informes, que la empresa realizó un  pago de USD 20 millones para la firma del contrato por los derechos de la Copa.</p>',
                author: 'Carlos Martinez',
                date: new Date(),
                category: categories[0].id
            });
            news.push({
                title: 'Un tramo de la avenida Napo quedó cubierto de escombros',
                content: '<p id="m12-11-13" class="selectionShareable">En la avenida Napo, frente al <b>Colegio Juan Pío Montúfar,</b> aún quedan las evidencias de las manifestaciones del lunes 15 de febrero. La calzada quedó cubierta de un polvo anaranjado, pedazos de piedras, de ramas, de troncos y basura.</p> <p id="m58-1-59" class="selectionShareable">Los conductores de vehículos que transitaban por el sector levantaban el polvo. <b>Lourdes Borja</b>, moradora, comentó que estaba indignada, por lo ocurrido en las protestas. "Los alumnos deberían hacer una minga para limpiar la calle", dijo. En la calle Upano, frente al colegio, la situación era similar. Al caminar se encontraba pedazos de piedras y los restos de los ladrillos que terminaron hecho polvo.<br><br>Por su parte, los padres de familia tomaron también medidas ante posibles desmanes. Algunos optaron por dejar a los jóvenes en la puerta del plantel.<br><br><b>Arturo Ch</b>, padre de Mateo (14 años), tiene previsto quedarse una hora afuera del colegio. Él no quiere que su hijo participe en protestas. "Tengo miedo que lo detengan".<br><br><b>Luis T., </b>papá de Jorge (16 años), se quedó también en la puerta de ingreso; si se producen desmanes llevará a su hijo a casa. "En las protestas se exponen a lesiones".<br><br>En los exteriores del establecimiento educativo, hasta las 07:40 de este 16 de febrero, las actividades se realizaban de manera normal. Pero desde las 08:30, grupos de estudiantes aparecieron con carteles en manos y se ubicaron en el acceso principal.<br></p>',
                author: 'Mayra Pacheco',
                date: new Date(),
                category: categories[1].id
            });

            News.create(news).exec(function (err, createdNews) {
                if (err) {
                    sails.log.error('Error de categorías :( ', err);
                    return;
                }

                sails.log.info('Noticias creadas:  ', createdNews);
                news = createdNews;
            });

        });
        
        var user = {
            username: 'christiangue',
            password: '1600651960',
            email: 'christiangue13@hotmail.com',
            name: 'Christian',
            lastname: 'Guevara',
            country: 'Ecuador',
            //categories: [],
            birthDate: new Date(),
            gender: 'male',
            featuredNews: [],
            foto: 'http://inventario2.nosplay.com/contenidos/big/los-profesionales-consideran-a-steve-jobs-la-persona-mas-influyente-en-los-videojuegos-img850262.jpg'
        };

    })();

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};

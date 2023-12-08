import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const MovifyFour = () => {
    const cards = [
        { id: 0, imgUrl: "/images/movify/coppelia-icon.svg", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut impedit accusamus, veritatis perferendis sit numquam nostrum unde minus voluptate consequuntur quidem aliquid maxime fugiat obcaecati nulla nesciunt placeat necessitatibus dignissimos! Suscipit officiis deserunt, delectus quam sapiente nihil itaque esse sunt sed magnam repellat labore debitis ab error assumenda ut omnis repudiandae libero totam quisquam exercitationem! Dignissimos fugit tempore ipsum quo eaque officiis error iusto minima explicabo, totam ullam, aut fuga, beatae consectetur tempora facilis reprehenderit magnam quam perspiciatis nostrum illo? Iusto unde facilis doloribus sint maiores odio nobis modi perferendis laudantium ducimus, rerum assumenda minima aspernatur. Sunt in consectetur necessitatibus, eligendi ratione fuga. Provident consequatur impedit quas atque quibusdam facilis excepturi. Illo voluptatum delectus eum at debitis earum id consectetur ex, praesentium eos quisquam temporibus inventore aliquid minus! Animi nihil maiores quod voluptatibus suscipit, a sequi cupiditate harum in earum minus totam eveniet sed sit quo. Illum dolores corporis ducimus. Nobis, fugit adipisci? Dolorum sunt maxime labore nulla dolor, molestiae sint veritatis ipsum cum fugiat totam? Saepe eaque corporis ipsa." },
        { id: 1, imgUrl: "/images/movify/assist-card-icon.svg", desc: "Consequatur adipisci dolor, atque alias modi quos? Expedita, temporibus praesentium iure repudiandae odit, dolor tempora, quis eos illo vitae aperiam pariatur nam ea quasi placeat laudantium. Iure quidem labore dolore deleniti quasi? Perspiciatis, error tempora soluta exercitationem, libero, repudiandae dignissimos minus nulla ipsa esse accusamus ducimus a voluptas asperiores nobis dolores amet architecto. Atque iste cumque dolorum id saepe, numquam doloremque explicabo reiciendis magni ipsam officiis voluptates culpa cum excepturi! Distinctio laborum placeat excepturi impedit?" },
        { id: 2, imgUrl: "/images/movify/eventos-icon.svg", desc: "Aperiam ut impedit accusamus, veritatis perferendis sit numquam nostrum unde minus voluptate consequuntur quidem aliquid maxime fugiat obcaecati nulla nesciunt placeat necessitatibus dignissimos! Suscipit officiis deserunt, delectus quam sapiente nihil itaque esse sunt sed magnam repellat labore debitis ab error assumenda ut omnis repudiandae libero totam quisquam exercitationem! Dignissimos fugit tempore ipsum quo eaque officiis error iusto minima explicabo, totam ullam, aut fuga, beatae consectetur tempora facilis reprehenderit magnam quam perspiciatis nostrum illo? Iusto unde facilis doloribus sint maiores odio nobis modi perferendis laudantium ducimus, rerum assumenda minima aspernatur. Sunt in consectetur necessitatibus, eligendi ratione fuga. Provident consequatur impedit quas atque quibusdam facilis excepturi. Illo voluptatum delectus eum at debitis earum id consectetur ex, praesentium eos quisquam temporibus inventore aliquid minus! Animi nihil maiores quod voluptatibus suscipit, a sequi cupiditate harum in earum minus totam eveniet sed sit quo. Illum dolores corporis ducimus. Nobis, fugit adipisci? Dolorum sunt maxime labore nulla dolor, molestiae sint veritatis ipsum cum fugiat totam? Saepe eaque corporis ipsa. Magni explicabo suscipit animi facilis neque. Ipsum facere exercitationem quis tenetur amet eius voluptate eum, laboriosam aliquid explicabo iure, porro quas voluptatum perferendis tempore, quam provident quae eos culpa repellat! Vitae maiores nisi delectus repellendus totam iusto tempora cum consequatur maxime a eum quia rerum harum hic unde provident dolore quidem molestias, ex vel." },
        { id: 3, imgUrl: "/images/movify/totto-logo-icon.svg", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut impedit accusamus, veritatis perferendis sit numquam nostrum unde minus voluptate consequuntur quidem aliquid maxime fugiat obcaecati nulla nesciunt placeat necessitatibus dignissimos! Suscipit officiis deserunt, delectus quam sapiente nihil itaque esse sunt sed magnam repellat labore debitis ab error assumenda ut omnis repudiandae libero totam quisquam exercitationem! Dignissimos fugit tempore ipsum quo eaque officiis error iusto minima explicabo, totam ullam, aut fuga, beatae consectetur tempora facilis reprehenderit magnam quam perspiciatis nostrum illo? Iusto unde facilis doloribus sint maiores odio nobis modi perferendis laudantium ducimus, rerum assumenda minima aspernatur. Sunt in consectetur necessitatibus, eligendi ratione fuga. Provident consequatur impedit quas atque quibusdam facilis excepturi. Magni explicabo suscipit animi facilis neque. Ipsum facere exercitationem quis tenetur amet eius voluptate eum, laboriosam aliquid explicabo iure, porro quas voluptatum perferendis tempore, quam provident quae eos culpa repellat! Vitae maiores nisi delectus repellendus totam iusto tempora cum consequatur maxime a eum quia rerum harum hic unde provident dolore quidem molestias, ex vel. Atque iste cumque dolorum id saepe, numquam doloremque explicabo reiciendis magni ipsam officiis voluptates culpa cum excepturi! Distinctio laborum placeat excepturi impedit?" },
        { id: 4, imgUrl: "/images/movify/ibis-logo-icon.svg", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut impedit accusamus, veritatis perferendis sit numquam nostrum unde minus voluptate consequuntur quidem aliquid maxime fugiat obcaecati nulla nesciunt placeat necessitatibus dignissimos! Suscipit officiis deserunt, delectus quam sapiente nihil itaque esse sunt sed magnam repellat labore debitis ab error assumenda ut omnis repudiandae libero totam quisquam exercitationem! Dignissimos fugit tempore ipsum quo eaque officiis error iusto minima explicabo, totam ullam, aut fuga, beatae consectetur tempora facilis reprehenderit magnam quam perspiciatis nostrum illo? Iusto unde facilis doloribus sint maiores odio nobis modi perferendis laudantium ducimus, rerum assumenda minima aspernatur. Sunt in consectetur necessitatibus, eligendi ratione fuga. Provident consequatur impedit quas atque quibusdam facilis excepturi. Illo voluptatum delectus eum at debitis earum id consectetur ex, praesentium eos quisquam temporibus inventore aliquid minus! Animi nihil maiores quod voluptatibus suscipit, a sequi cupiditate harum in earum minus totam eveniet sed sit quo. Illum dolores corporis ducimus. Nobis, fugit adipisci mpora cum consequatur maxime a eum quia rerum harum hic unde provident dolore quidem molestias, ex vel. Consequatur adipisci dolor, atque alias modi quos? Expedita, temporibus praesentium iure repudiandae odit." },
        { id: 5, imgUrl: "/images/movify/tarragona-icon-new.svg", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut impedit accusamus, veritatis perferendis sit numquam nostrum unde minus voluptate consequuntur quidem aliquid maxime fugiat obcaecati nulla nesciunt placeat necessitatibus dignissimos! Suscipit officiis deserunt, delectus quam sapiente nihil itaque esse sunt sed magnam repellat labore debitis ab error assumenda ut omnis repudiandae libero totam quisquam exercitationem! Dignissimos fugit tempore ipsum quo eaque officiis error iusto minima explicabo, totam ullam, aut fuga, beatae consectetur tempora facilis reprehenderit magnam quam perspiciatis nostrum illo?" },
    ]
    return (
        <div className='movify_four_wrapper'>
            <div className="movify_four_heading">
                Descuentos exclusivos
            </div>
            <div className="movify_four_title">
                Accede a descuentos exclusivos por ser parte del programa Muvify.
            </div>
            <div className="movify_four_cards">
                {cards.map(card => <MovifyFourCard card={card} key={card.id} />)}
            </div>
        </div>
    )
}

export default MovifyFour


const MovifyFourCard = ({ card, key }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 500,
        bgcolor: '#fff',
        boxShadow: 4,
        p: 2,
        borderRadius: 4,
        transitionDuration: '2s',
    };

    return (
        <div className="card" key={key}>
            <img src={card.imgUrl} alt="" />
            <div className="btns">
                <div className="btn"><span>*</span> INICIAL</div>
                <div className="btn"><span>**</span> EXTRA</div>
                <div className="btn"><span>***</span> PRO</div>
            </div>
            <div className="info" onClick={handleOpen}>
                <img src="/images/movify/info-icon.svg" alt="info icon" />
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="box_modal">
                    <div onClick={handleClose} className='cancle_btn'>
                        <span><AiOutlineClose style={{ width: 14, height: 14 }} /></span>
                    </div>
                    <div className='box_inner'>

                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                        <img src={card.imgUrl} alt="" />
                        <div className="btns">
                            <div>
                                {card.desc}
                            </div>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    )
}
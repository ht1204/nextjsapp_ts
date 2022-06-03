import React from "react";
import type { NextPage } from 'next'
import Link from "next/link";
import { Character } from "../utils/types";

interface CharacterProp {
    character: Character;
}

const Card: NextPage<CharacterProp> = ({ character }) => {
    const { id, name, gender, species, status, image } = character;
    
    return (
        <li className="character-card">
            <Link
                href={{
                    pathname: `/character/${id}`,
                }}
            >
                <article className="character-article">
                    <picture>
                        <source media="(max-width: 425px)" srcSet={image} />
                        <img loading="lazy" src={image} alt="" title="" />
                    </picture>
                    <div className="character-description">
                        <h2>{name}</h2>
                        <ul>
                            <li>
                                <p>
                                    <strong>Gender:</strong> {gender}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Specie:</strong> {species}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Status:</strong> {status}
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
            </Link>
        </li>
    );
};
export default Card;

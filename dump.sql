--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" character varying(8) NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "usersId" integer,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (1, 'http://www.youtube.com', 'Fx7vt0P1', 0, NULL, '2022-10-16 19:07:28.647445');
INSERT INTO public.links VALUES (2, 'http://www.animes.com', 'iYnsjAdT', 0, 5, '2022-10-16 19:33:08.268232');
INSERT INTO public.links VALUES (3, 'http://www.animes.com', 'WyOG5iQz', 0, 5, '2022-10-16 19:56:41.848064');
INSERT INTO public.links VALUES (4, 'http://www.animes.com', 'TS_vOnHl', 0, 5, '2022-10-16 19:59:01.776835');
INSERT INTO public.links VALUES (5, 'http://www..com', 'ODCfaV_Z', 0, 5, '2022-10-16 19:59:47.680009');
INSERT INTO public.links VALUES (6, 'http://www..com', 'c3snEI7m', 0, 7, '2022-10-16 20:04:54.217881');
INSERT INTO public.links VALUES (7, 'http://www.lutalivre.com', 'ukR_JF97', 0, 7, '2022-10-16 20:05:47.986965');
INSERT INTO public.links VALUES (13, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTat2BH-40Q07STMURkmVuNpCERhkwmzyzEj3N7CzmSQDGXjW4pWMbNHNjrqZM_3ymaYio&usqp=CAU', 'FoIW1xID', 8, 9, '2022-10-17 00:16:00.317945');
INSERT INTO public.links VALUES (14, 'https://static.wikia.nocookie.net/fairytail/images/8/89/Natsu_Perfil_Nova.png/revision/latest/scale-to-width-down/300?cb=20160203220700&path-prefix=pt-br', 'WUpcIzjM', 7, 9, '2022-10-17 01:25:18.430804');
INSERT INTO public.links VALUES (15, 'https://static.wikia.nocookie.net/fairytail/images/8/89/Natsu_Perfil_Nova.png/revision/latest/scale-to-width-down/300?cb=20160203220700&path-prefix=pt-br', '0GmNc6R6', 5, 10, '2022-10-17 01:56:16.411095');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (2, 'test', 'test@gmail.com', '$2b$10$Obs.z7bV31OnxgVM2rVag.Dqgt2q.pGZmtjAc3iBoJO6tZSQioGTq', '2022-10-15 16:15:47.961958');
INSERT INTO public.users VALUES (3, 'ast', 'aast@gmail.com', '$2b$10$FosFAvJDH3TFcxtKz2vNh.VpRy2UC2VvML.j/aHqWVUxBjvXyabs6', '2022-10-15 16:21:05.936314');
INSERT INTO public.users VALUES (4, 'roge', 'roge@gmail.com', '$2b$10$Qj5.22/4.cyS6xaHG2c9z.Y5Kae0CL/CLsgkYWZ/YDTPu5it/CyT2', '2022-10-15 16:21:47.563823');
INSERT INTO public.users VALUES (5, 'test3', 'test3@gmail.com', '$2b$10$KpVmq7qle7rGEUC9ZOBRvOXqZVe477Q1mroVKlq2MS5P9xak2pBOS', '2022-10-15 16:58:05.075578');
INSERT INTO public.users VALUES (6, 'at', 'ast@gmail.com', '$2b$10$UdQB177q3EvIWrom8.HWbes1mgQJ5s1OKevWb.rmQqkhyXl2yNJaq', '2022-10-15 17:06:49.100711');
INSERT INTO public.users VALUES (7, 'teste10', 'teste10@gmail.com', '$2b$10$Utevel54hEMKpUosAtWiLetSbCubvL9DKNP1atJi18XdtJymL4zOm', '2022-10-16 20:04:15.937262');
INSERT INTO public.users VALUES (8, 'jesus', 'jesus@gmail.com', '$2b$10$xq3NELTrIECsQEYQFSGjAegX5vLwrzfCa6EdVCxSL4JFVUDJX6w56', '2022-10-16 20:57:34.24334');
INSERT INTO public.users VALUES (9, 'lula', 'lula@gmail.com', '$2b$10$T9w5METaNYdzCB196z1JTu7EtVWQC8nrjcmwo91kNMc.0Pqb2iPVW', '2022-10-17 00:14:54.644836');
INSERT INTO public.users VALUES (10, 'tutu', 'tutu@gmail.com', '$2b$10$7NspSKAzFIfehW92jvoDgO3.HwCXPEmtOrDGrYSw41KIMvRqAWfj6', '2022-10-17 01:55:43.271366');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: links links_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_usersId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--


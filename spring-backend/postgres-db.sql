-- DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo
    WITH
    OWNER = todo
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- DROP TABLE IF EXISTS public.todo_item;

CREATE TABLE IF NOT EXISTS public.todo_item
(
    id character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at bigint NOT NULL,
    done boolean NOT NULL,
    due_date bigint,
    summary character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT todo_item_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.todo_item
    OWNER to todo;
INSERT INTO clientes (nome)
VALUES ('Jose Silva'), ('Joao Oliveira'), ('Mateus Souza'), ('John Smith');

INSERT INTO procedimentos (nome, valor, id_profissional)
VALUES ('Pilates', 300, 1), ('Botox', 220, 2), ('Implante de silicone', 3050, 2);

INSERT INTO profissionals (nome, comissao)
VALUES ('Joao Souza', 10), ('Marcelo Paiva', 8), ('Maria Silva', 12);

INSERT INTO atendimentos (id_cliente, id_procedimento, valor_total)
VALUES (1, 1, 330), (2,2,396), (3,3,3416);


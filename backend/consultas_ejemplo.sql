INSERT INTO users (name, lastname, email, password) 
VALUES 
    ('Gerardo', 'Lucero', 'gerardoluceroc@gmail.com', 'clave123'),
    ('María', 'González', 'maria.gonzalez@example.com', 'clave456');

INSERT INTO categories (name, user_id) 
VALUES 
    ('Delivery', 1),
    ('Taxis', 1),
    ('Ropa', 1),
    ('Fiestas', 2),
    ('Supermercado', 2),
    ('Gastos Estadio', 2);

-- Insertar gastos para Gerardo (user_id = 1)
INSERT INTO expenses (mount, date, description, user_id) 
VALUES 
    (20.5, '2025-02-18', 'Gasto en comida de delivery', 1),
    (35.0, '2025-02-19', 'Pago de taxi', 1),
    (50.0, '2025-02-20', 'Compra de ropa nueva', 1);

-- Insertar gastos para María (user_id = 2)
INSERT INTO expenses (mount, date, description, user_id) 
VALUES 
    (15.0, '2025-02-18', 'Fiesta de cumpleaños', 2),
    (80.0, '2025-02-19', 'Supermercado para la semana', 2),
    (100.0, '2025-02-20', 'Entradas al estadio', 2);

-- Relacionar los gastos con sus respectivas categorías en la tabla intermedia 'expenses_categories'
-- Relacionar gasto de Gerardo con sus categorías
INSERT INTO expenses_categories (expense_id, category_id) 
VALUES 
    (1, 1),  -- Delivery
    (2, 2),  -- Taxis
    (3, 3);  -- Ropa

-- Relacionar gasto de María con sus categorías
INSERT INTO expenses_categories (expense_id, category_id) 
VALUES 
    (4, 4),  -- Fiestas
    (5, 5),  -- Supermercado
    (6, 6);  -- Gastos Estadio
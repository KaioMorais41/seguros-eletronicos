ESCOPO DO PROJETO: FOXGUARD API
1. Título do Projeto e Modelo de Negócio
Título do Projeto: FoxGuard (Desenvolvido por HexaFox Solutions)
Modelo de Negócio: Insurtech (Seguros para Eletrônicos). A proposta é oferecer uma plataforma ágil para o gerenciamento de apólices de seguro contra roubo, furto e danos, focada em dispositivos móveis e hardware de alto valor.
2. Descrição Geral O FoxGuard é um sistema de backend robusto projetado para centralizar o controle de apólices de seguros eletrônicos. A aplicação permite que corretoras e parceiros de varejo realizem o ciclo completo de vida de um seguro: desde a emissão da apólice (vinculada ao código identificador único do aparelho) até consultas rápidas de conformidade e valor segurado. O objetivo principal é garantir a integridade dos dados e a rapidez na resposta para o cliente final.
3. Entidade e Atributos A entidade principal mapeada no banco de dados (tb_seguros_eletronicos) contém os seguintes atributos obrigatórios:
id (BIGINT / Primary Key): Identificador automático e único da apólice.
cliente (VARCHAR / String): Nome completo do titular do seguro.
aparelho (VARCHAR / String): Descrição do dispositivo segurado (ex: Samsung S24 Ultra).
valor_apolice (DECIMAL 10,2 / Number): Valor monetário total da cobertura contratada.
imei (VARCHAR / String): Código de identificação global do hardware (essencial para validação de sinistros).
4. Funcionalidades Principais (CRUD) A API expõe os seguintes métodos para manipulação dos dados via protocolo HTTP:
Create (POST): Cadastro de novas apólices de seguro eletrônico.
Read (GET): Listagem de todos os registros e busca detalhada por ID individual.
Update (PUT): Edição de informações da apólice (ex: correção de nome ou atualização de valor).
Delete (DELETE): Exclusão definitiva de registros da base de dados.
Consulta Customizada: Método findByImei — Funcionalidade que permite localizar uma apólice específica através do código identificador único do aparelho.
5. Tecnologias Utilizadas
Linguagem: TypeScript.
Framework Backend: NestJS (Node.js).
Persistência (ORM): TypeORM.
Banco de Dados: MySQL, utilizando a tabela tb_seguros_eletronicos.
Ferramenta de Testes: Insomnia.




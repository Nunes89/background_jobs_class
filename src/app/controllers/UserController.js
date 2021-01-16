import passwordGenerator from "password-generator";
import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    await Mail.sendMail({
      from: "DIO <contato@dio.com>",
      to: `${name} <${email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${name}, bem-vindo a DIO.`,
    });

    return res.json(user);
  },
};

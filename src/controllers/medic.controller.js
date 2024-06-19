import { Medic } from "../models/Medic.js";
//import { Office } from "../models/Office.js";

export async function getMedics(req, res) {
  try {
    const medics = await Medic.findAll({
      atributes: ["id", "name", "speciality", "phone", "image","email","services","certifications","state"],
    });
    res.json(medics);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createMedic(req, res) {
  const { name, speciality, phone, image, email, services, certifications, state } = req.body;
  try {
    let newMedic = await Medic.create(
      {
        name,
        speciality,
        phone,
//        image: new Date(deliveryDate).getTime(),
        image,
        email,
        services,
        certifications,
        state
      },
      {
        fields: ["name", "speciality", "phone", "image","email","services","certifications","state"],
      }
    );
    return res.json(newMedic);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getMedic(req, res) {
  const { id } = req.params;
  try {
    const medic = await Medic.findOne({
      where: {
        id,
      },
    });
    res.json(medic);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateMedic = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, speciality, phone } = req.body;

    const medic = await Medic.findByPk(id);
    medic.name = name;
    medic.speciality = speciality;
    medic.phone = phone;
    medic.image = image;
    medic.email = email;
    medic.services= services;
    medic.certifications= certifications;
    medic.state=state;
    await medic.save();

    res.json(medic);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteMedic(req, res) {
  const { id } = req.params;
  try {
    const rowsDeleted = await Medic.destroy({
      where: {
        id,
      },
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Medic not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getMedicOffices(req, res) {
  const { id } = req.params;
  try {
    const offices = await Office.findAll({
      attributes: ["id", "medicId", "name"],
      where: { medicId: id },
    });
    res.json(offices);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
const express = require('express');
const router=express.Router()
const Contacts=require("../Controllers/contact")

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - Names
 *         - Email
 *         - Message
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the contact
 *         Names:
 *           type: string
 *           description: The name of contactor
 *         Email:
 *           type: string
 *           description: The email of contactor
 *         Message:
 *           type: string
 *           description: The message of contactor
 *       example:
 *         Names: Hagenimana Yassin
 *         Email: hyassin509@gmail.com
 *         Message: Alexander K. Dewdney
 */

 /**
  * @swagger
  * tags:
  *   name: Contacts
  *   description: The contacts managing API
  */


/**
 * @swagger
 * /api/Contacts/allContacts:
 *   get:
 *     summary: Returns the list of all the contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The list of the contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */

router.get("/allContacts",Contacts.getContacts)


/**
 * @swagger
 * /api/Contacts/ContactsById/{id}:
 *   get:
 *     summary: Get the contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 *     responses:
 *       200:
 *         description: The contact description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: The contact was not found
 */
router.get("/ContactsById/:_id",Contacts.getContactById)

/**
 * @swagger
 * /api/Contacts/totalContacts:
 *   get:
 *     summary: total number of  the contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The number of the contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */
router.get("/totalContacts",Contacts.getNUmberOfContacts)

/**
 * @swagger
 * /api/Contacts/AddContacts:
 *   post:
 *     summary: Post New contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: The contact was successfully sent
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some server error
 */

router.post("/AddContacts",Contacts.AddContact)


/**
 * @swagger
 * /api/Contacts/deleteContacts/{id}:
 *   delete:
 *     summary: Remove the contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 * 
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 */
router.delete("/deleteContacts/:_id",Contacts.deleteContact)

/**
 * @swagger
 * /api/Contacts/deleteAllContacts:
 *    delete:
 *     summary: Remove all contact
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 */
router.delete("/deleteAllContacts",Contacts.deleteAllContacts)


/**
 * @swagger
 * /api/Contacts/UpdateContact/{id}:
 *  put:
 *    summary: Update the contact by the id
 *    tags: [Contacts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The contact id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Contact'
 *    responses:
 *      200:
 *        description: The contact was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Contact'
 *      404:
 *        description: The contact was not found
 *      500:
 *        description: Error happened while updating
 */

router.put("/UpdateContact/:_id",Contacts.updateContacts)


module.exports=router
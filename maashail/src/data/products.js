// Import your images
import img1 from "../assets/img1.1.jpeg";
import img2 from "../assets/img1.2.jpeg";
import img3 from "../assets/img1.3.jpeg";
import img4 from "../assets/img1.4.jpeg";
import img5 from "../assets/img1.5.jpeg";
import img6 from "../assets/img2.1.jpeg";
import img7 from "../assets/img2.2.jpeg";
import img8 from "../assets/img2.3.jpeg";
import img9 from "../assets/img2.4.jpeg";
import img10 from "../assets/img2.5.jpeg";
import img11 from "../assets/img3.1.jpeg";
import img12 from "../assets/img3.2.jpeg";
import img13 from "../assets/img3mid.jpeg";
import img14 from "../assets/img3.3.jpeg";
import img15 from "../assets/img3.4.jpeg";
import img16 from "../assets/img4.1.jpeg"
import img17 from "../assets/img4.2.jpeg"

export const products = [
    {
        id: 1,
        name: "Rahat Rooh Green Oil",
        price: 45,
        images: [img1, img2, img3, img4,img5],
        description:
          `Ayurved Ratna Green Oil is a cooling hair oil crafted from nature's precious herbs and essential spices. It's the perfect solution for all your hair care needs, effectively relieving dandruff, strengthening hair roots, and promoting hair growth. 
          
          This exceptional cooling hair oil provides complete nourishment to your hair and scalp, leaving it refreshed and rejuvenated. With regular use, it improves your hair's restoration power, making it look healthier and shinier. Say goodbye to hair problems and experience the remarkable benefits of Ayurved Ratna Green Oil. Achieve strong, healthy, and beautiful hair by trying it today.`,
        benefits: [
          "Suitable for all hair types.",
          "Promotes restful sleep.",
          "Reduces stress and anxiety.",
          "Hair strengthening and growth.",
        ],
        uses: "Rahat Rooh Green Oil Extra Thanda Hair Oil provides a refreshing and cooling effect on the scalp, giving you a soothing and relaxing experience. It helps to relieve headache, stress, sleeplessness, and tiredness and is ideal for everyday head massages.",
        ingredients: [
        "Amla (Indian gooseberry)",
        "Ashwagandha (Indian Ginseng)",
        "Mulethi (Liquorice)",
        "Chitrak (Plumbago zeylanica)",
        "Haritaki (Myrobalan)",
        "Jatamansi (Spikenard)",
        ]
      },
      {
        id: 2,
        name: "Rahat Rooh Medicated Hair Oil",
        price: 50,
        images: [img6, img7, img8, img9,img10],
        description: `Experience the enchanting power of Rahat Rooh, the ultimate multi-purpose body and skin oil crafted with premium quality ingredients, extracted from rare Himalayan herbs. Our gold medal from Indian Aushadhalaya ensures you receive only the best quality product. 
        
        Indulge in the goodness of Rahat Rooh's magical blend of rare herbs, including nutmeg, myrtle, cardamom, turmeric, lemon, tulsi, and cinnamon. These potent ingredients have been carefully selected for their powerful healing and soothing properties, making Rahat Rooh an ideal choice for a wide range of health and wellness needs. 
        
        Transform your body and mind with Rahat Rooh's magical blend of rare herbs. Let its healing powers transport you to a world of pure bliss and relaxation.`,
        benefits: [
            "Very Effective in all types of body aches.", 
            "Effective in severe headaches like migraine.", 
            "Regular use helps subside Hemi- carnia.", "Can be applied on cuts and burns.", 
            "It works like a miracle for skin-related problems, like skin diseases, pimples, itching, eczema, etc.", 
            "Works wonders in cough and cold too.", 
            "If massage, it gives you a sound sleep at night."
        ],
        uses: "Our Medicated oil is perfect for promoting sound sleep, relieving headaches like migraines,and treating a range of skin-related issues such as eczema,itching and pimples. ",
        ingredients: ["Laung(clove)", "Kali Elachi (black cardamom)", "Jaipal (nutmeg)", "Guggal (Commiphora wightii)", "Kush (desmostachya bipinnata)"],
      },
      {
        id: 3,
        name: "Rahat Rooh Sukoon Oil",
        price: 75,
        images: [img11, img12, img13, img14,img15],
        description: "Ayurvedic Formula that is 100% Pure and Has No Side Effects. Completely free from Parabens and sulphate. Ache, headache, or other physical pain making you feel down? This all-natural oil has been created to improve your mood and act as a natural mood enhancer.Fast-Acting: Many pain-relieving oils can offer quick relief when applied to the affected area, making them a convenient option for managing acute pain. Different pain-relieving oils can be used for various types of body aches. Formulated using the latest technology and natural ingredients like Ratan Jot, Kalonji, Talish Patra, Eucalyptus, and more, Rahat Rooh Sukoon Oil meets set market standards, ensuring its highly effective properties. Every Jari Buti has been mixed with 1kg Til Oil. It is available in premium quality packaging to meet the specific needs of our prestigious client.",
        benefits: ["100% natural solution for various pains.", "Reduces stress and anxiety.", "Provide relief from knee pain, joint pain, back pain, upper back pain, muscle stiffness, sprains, and more.", "Soothes tired muscles and relieves body ache."],
        uses: "Gently massage a small amount of oil on the forehead, temples, neck, and shoulders. For body massage, use a liberal amount and massage with gentle but firm strokes. Can be used anytime to feel relaxed and rejuvenated.",
        ingredients: ["Kalonji(Nigella sativa)", "Adrak(Ginger)", "Tomar Beej(Zanthoxylum Alatum)", "Ratanjot(Dyer's alkanet)", "Kulanjan (Greater Galangal)"],
      },
      {
        id: 4,
        name: "Rahat Rooh Ayurvedic Satreetha Shampoo",
        price: 235,
        images: [img16, img17],
        description: "Rahat Rooh Ayurvedic Satreetha Shampoo is a natural hair cleanser made from the extracts of Reetha (Soapnut), a traditional Ayurvedic herb known for its cleansing properties. This shampoo gently removes dirt, oil, and impurities from the scalp and hair without stripping away natural moisture. It leaves your hair clean, soft, and healthy.",
        benefits: ["Gently cleanses the scalp and hair.", "Maintains the natural pH balance of the scalp.", "Adds shine and volume to the hair.", "Prevents dandruff and other scalp issues."],
        uses: "Apply a small amount of shampoo to wet hair and scalp. Work into a rich lather, then rinse thoroughly with water. For best results, follow up with a conditioner. Safe for daily use.",
        ingredients: ["Reetha ", "Amla", "Shikakai", "Neem", "Jatamansi","Sugandhbala","Methi"],
      }
]
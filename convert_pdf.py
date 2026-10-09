import fitz
import os


pdf_path = "soto-setiabudi.pdf"

output_folder = "public/proposal/soto-setiabudi"


os.makedirs(
    output_folder,
    exist_ok=True
)


doc = fitz.open(pdf_path)


for page_number in range(len(doc)):

    page = doc[page_number]

    pix = page.get_pixmap(
        dpi=150
    )

    output = f"{output_folder}/page-{page_number+1}.jpg"

    pix.save(output)

    print(
        f"Saved {output}"
    )


print("DONE")
def update_txt_file(file_path, new_text):
	with open(file_path, 'w') as file:
		file.write(new_text)

# Example usage
file_path = 'path/to/your/file.txt'
new_text = 'Your new text content'
update_txt_file(file_path, new_text)
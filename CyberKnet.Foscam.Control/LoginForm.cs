using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CyberKnet.Foscam.Control
{
    public partial class LoginForm : Form
    {
        public string IPAddress { get; private set; }
        public string Username { get; private set; }
        public string Password { get; private set; }
        public LoginForm()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, EventArgs e)
        {
            StringBuilder message = new StringBuilder();
            if (IPAddressTextBox.Text.Trim().Length == 0)
            {
                message.Append("\t* IP Address was not entered\n");
            }
            if (UsernameTextbox.Text.Trim().Length == 0)
                message.Append("\t* Username was not entered\n");
            if (PasswordTextbox.Text.Trim().Length == 0)
                message.Append("\t* Password was not entered\n");
            if (message.Length == 0)
            {
                this.IPAddress = IPAddressTextBox.Text.Trim();
                this.Username = UsernameTextbox.Text.Trim();
                this.Password = PasswordTextbox.Text.Trim();
                this.DialogResult = DialogResult.OK;
                this.Hide();
            }
            else
            {
                MessageBox.Show(
                    String.Format("The following errors were encountered:\n{0}Please correct them and try again.", message.ToString()),
                    "Incomplete login information...",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Exclamation
                    );
            }
        }
    }
}
